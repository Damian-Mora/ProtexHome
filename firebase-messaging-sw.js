// public/firebase-messaging-sw.js

importScripts(
    'https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js'
);

importScripts(
    'https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js'
);


// ============================================================
// FIREBASE
// ============================================================

firebase.initializeApp({

    apiKey:
        "AIzaSyDt4bPEKjStdFY-i5VLz-yx79wGModi9GM",

    authDomain:
        "alarmaip-e0868.firebaseapp.com",

    databaseURL:
        "https://alarmaip-e0868-default-rtdb.firebaseio.com",

    projectId:
        "alarmaip-e0868",

    storageBucket:
        "alarmaip-e0868.appspot.com",

    messagingSenderId:
        "137552335402",

    appId:
        "1:137552335402:web:579a6e7fe8455ce78ca953"
});


const messaging =
    firebase.messaging();


// ============================================================
// INSTALACIÓN
// ============================================================

self.addEventListener(
    'install',
    () => {

        console.log(
            '✅ FCM SW instalado'
        );
    }
);


// ============================================================
// ACTIVACIÓN
// ============================================================

self.addEventListener(
    'activate',
    (event) => {

        console.log(
            '✅ FCM SW activado'
        );

        event.waitUntil(
            self.clients.claim()
        );
    }
);


// ============================================================
// FORMATEO
// ============================================================

function formatEventMessage(payload) {

    const {
        A: partition,
        D: zoneOrUser,
        E: eventType,
        N: name
    } = payload;


    const zonaNum =
        String(zoneOrUser || 0)
            .padStart(2, '0');


    const nombre =
        name || 'Usuario';


    let title = '📢 ProtexHome';
    let body = '';
    let color = '#6b7280';


    switch (Number(eventType)) {

        case 1:

            title =
                `🚨 Alarma en Zona ${zonaNum}`;

            body =
                `Partición ${partition} • ${nombre}`;

            color =
                '#dc2626';

            break;


        case 2:

            title =
                `✅ Restauración en Zona ${zonaNum}`;

            body =
                `Partición ${partition} • ${nombre}`;

            color =
                '#16a34a';

            break;


        case 3: {

            const fallaMap = {

                1: 'Batería baja',
                2: 'Falla de sirena',
                3: 'Falla de línea telefónica',
                4: 'Falla de comunicación'

            };


            const descripcion =
                fallaMap[zoneOrUser] ||
                `Falla (código ${zoneOrUser})`;


            title =
                `⚠️ Falla: ${descripcion}`;

            body =
                `Partición ${partition}`;

            color =
                '#d97706';

            break;
        }


        case 4: {

            const restMap = {

                1: 'Batería baja restaurada',
                2: 'Sirena restaurada',
                3: 'Línea telefónica restaurada',
                4: 'Comunicación restaurada'

            };


            const descripcion =
                restMap[zoneOrUser] ||
                `Falla restaurada (código ${zoneOrUser})`;


            title =
                `🔄 ${descripcion}`;

            body =
                `Partición ${partition}`;

            color =
                '#a16207';

            break;
        }


        case 5:

            title =
                `🔓 Apertura por usuario ${zonaNum}`;

            body =
                `${nombre} • Partición ${partition}`;

            color =
                '#2563eb';

            break;


        case 6:

            title =
                `🔒 Cierre por usuario ${zonaNum}`;

            body =
                `${nombre} • Partición ${partition}`;

            color =
                '#7c3aed';

            break;


        case 7: {

            const tipoMap = {

                0: 'Fuego',
                1: 'Alarma médica',
                2: 'Pánico de teclado'

            };


            const tipo =
                tipoMap[zoneOrUser] ||
                `Alarma (código ${zoneOrUser})`;


            title =
                `🔥 ${tipo}`;

            body =
                `Partición ${partition}`;

            color =
                '#b91c1c';

            break;
        }


        default:

            title =
                `📩 Evento ${eventType}`;

            body =
                `Partición ${partition} • ${nombre}`;
    }


    if (partition == 9) {

        body =
            body.replace(
                'Partición',
                'Global'
            );
    }


    return {
        title,
        body,
        color
    };
}


// ============================================================
// BACKGROUND FCM
// ============================================================

messaging.onBackgroundMessage(
    (payload) => {

        console.log(
            '📩 FCM SW: mensaje recibido',
            payload
        );


        const eventData =
            payload.data || {};


        const formatted =
            eventData.E !== undefined
                ? formatEventMessage(eventData)
                : {
                    title:
                        payload.notification?.title ||
                        'ProtexHome',

                    body:
                        payload.notification?.body ||
                        'Nuevo evento',

                    color:
                        '#6b7280'
                };


        const serial =
            eventData.S ||
            'unknown';


        const options = {

            body:
                formatted.body,

            icon:
                '/ProtexHome/assets/icon-512.png',

            badge:
                '/ProtexHome/assets/icon-512.png',

            tag:
                `event-${serial}-${Date.now()}`,

            requireInteraction:
                true,

            data: {
                payload:
                    eventData
            }
        };


        if (
            'color' in Notification.prototype
        ) {

            options.color =
                formatted.color;
        }


        console.log(
            '🔔 FCM SW mostrando:',
            formatted.title,
            formatted.body
        );


        return self.registration
            .showNotification(
                formatted.title,
                options
            )
            .then(() => {

                console.log(
                    '✅ FCM SW notificación mostrada'
                );

            })
            .catch((error) => {

                console.error(
                    '❌ FCM SW showNotification:',
                    error
                );
            });
    }
);


// ============================================================
// CLICK
// ============================================================

self.addEventListener(
    'notificationclick',
    (event) => {

        console.log(
            '🔔 FCM SW click'
        );


        event.notification.close();


        const payload =
            event.notification
                .data?.payload;


        let url =
            '/ProtexHome/';


        if (
            payload &&
            payload.S
        ) {

            url =
                `/ProtexHome/?serial=${encodeURIComponent(
                    payload.S
                )}`;
        }


        event.waitUntil(
            clients.openWindow(url)
        );
    }
);