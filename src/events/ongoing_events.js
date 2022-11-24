import { createStore } from 'vuex'

const event1 ={
        // ID? von DB
        // Zeit wird mit Smartphone Zeit verglich für Auflistung nach Aktualität
        eventname: "Grillfescht",
        eventbeschreibung: "Wir grillen am See",
        startzeit: "18:00",
        eventdatum: "2023-08-02",
        zusagedatum: "2023-01-31",
        ort: "zürisee",
        mitbring_dinge: [{"Rüeblisalat": false}, {"2 Gascho Bier": false}],
        linkcode: "XYZ",
}

const event2 ={
        // ID? von DB
        // Zeit wird mit Smartphone Zeit verglich für Auflistung nach Aktualität
        eventname: "BBQ",
        eventbeschreibung: "Im Wald grillieren",
        startzeit: "16:00",
        eventdatum: "2023-06-17",
        zusagedatum: "2023-04-31",
        ort: "Bremgartenwald",
        mitbring_dinge: [{"BBQ-Sauce": false}, {"Grillzange": false}],
        linkcode: "ABC",
}

const event3 ={
        // ID? von DB
        // Zeit wird mit Smartphone Zeit verglich für Auflistung nach Aktualität
        eventname: "Geburiparty",
        eventbeschreibung: "Wir grillen im Garten",
        startzeit: "20:00",
        eventdatum: "2023-05-12",
        zusagedatum: "2023-03-31",
        ort: "Zuhause im Garten",
        mitbring_dinge: [{"Grillkohle": false}, {"Geburtstagskucheb": false}],
        linkcode: "EFG",
}
const alle_events =[event1, event2, event3]

export default createStore({
        state: {
              alle_events
        },
        getters: {
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
      })
      