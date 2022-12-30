import { createStore } from 'vuex'

const event1 ={
        // ID? von DB
        id: "345102",
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
        id: "247848",
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
        id: "216598",
        eventname: "Geburiparty",
        eventbeschreibung: "Wir grillen im Garten",
        startzeit: "20:00",
        eventdatum: "2023-05-12",
        zusagedatum: "2023-03-31",
        ort: "Zuhause im Garten",
        mitbring_dinge: [{"Grillkohle": false}, {"Geburtstagskuchen": false}],
        linkcode: "EFG",
}


const alle_events = [event1, event2, event3]

export default createStore({
        state: {
              alle_events
        },
        getters: {
                get_alle_events(state){
                        return state.alle_events
                }, // END get_alle_events
                get_anzahl_events(state, getters){                    
                        return getters.get_alle_events.length
                },
                get_eventbyID: (state) => (id) =>{  
                       return state.alle_events.find((event)=> event.id == id)
                },
                get_sorted_events(state){
                        var alle_events = state.alle_events;
                        var sorted_events = alle_events.sort(compare_timestamps);
                        return sorted_events;

                        function compare_timestamps(event1, event2){
                                var date_string1 = event1.eventdatum + "T" + event1.startzeit;
                                var date_string2 = event2.eventdatum + "T" + event2.startzeit;
                                var date_timestamp1 = Date.parse(date_string1);
                                var date_timestamp2 = Date.parse(date_string2);
                                return date_timestamp1 - date_timestamp2;
                        }
                },

        }, // END getters
        mutations: {
        },
        actions: {
        },
        modules: {
        }
      })
      