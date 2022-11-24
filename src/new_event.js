import { reactive } from 'vue'

export const new_event = reactive({
            eventname: undefined,
            eventbeschreibung: undefined,
            startzeit: undefined,
            eventdatum: undefined,
            zusagedatum: undefined,
            ort: undefined,
            mitbring_dinge: [],
            linkcode: undefined,
  })