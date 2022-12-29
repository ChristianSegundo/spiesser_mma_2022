import { reactive } from 'vue'

export const new_event = reactive({
            eventname: undefined,
            eventbeschreibung: undefined,
            startzeit: "13:30",
            eventdatum: undefined,
            zusagedatum: false,
            ort: undefined,
            mitbring_dinge: [],
            linkcode: undefined,
  })

