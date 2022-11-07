import { reactive } from 'vue'

export const new_event = reactive({
            eventname: undefined,
            eventbeschreibung: undefined,
            startzeit: {stunde: number, minute: number},
            datum: undefined,
            zusagedatum: undefined,
            ort: undefined,
            mitbring_dinge: {},
            linkcode: undefined,
  })