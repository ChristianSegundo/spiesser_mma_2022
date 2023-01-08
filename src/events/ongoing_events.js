import { createStore } from 'vuex'

const event1 ={
        // ID? von DB
        id: "345102",
        eventname: "Grillfescht",
        eventbeschreibung: "Wir grillen am See",
        startzeit: "18:00",
        eventdatum: "2023-08-02",
        zusagedatum: "2023-01-31",
        ort: {
                name: "Zürichsee",
                latitude: 47.2225216,
                longitude: 8.752711399999999
            },
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
        ort: {
                name: "Bremgartenwald",
                latitude: 46.96829479999999,
                longitude: 7.432560299999998
            },
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
        ort: {
                name: "Allmendweg 18, Aarau",
                latitude: 47.3923254,
                longitude: 8.0381469
            },
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
                add_event(state, new_event){

                        var event ={            
                                ort: {
                                name: undefined,
                                latitude: undefined,
                                longitude: undefined
                            }
                        };
                        event.id = Math.floor(Math.random() * 1000)
                        event.eventname = new_event.eventname;
                        event.eventbeschreibung = new_event.eventbeschreibung;
                        event.startzeit = new_event.startzeit;
                        event.eventdatum = new_event.eventdatum;
                        event.zusagedatum = new_event.zusagedatum;
                        event.ort.name = new_event.ort.name;
                        event.ort.latitude = new_event.ort.latitude;
                        event.ort.longitude = new_event.ort.longitude;
                        event.mitbring_dinge = new_event.mitbring_dinge
                        event.linkcode = "https://450446-12.web.fhgr.ch/dashboard/event-details/" + event.id
                        
                        state.alle_events.push(event)
                }
        },
        actions: {
        },
        modules: {
        }
      })
      