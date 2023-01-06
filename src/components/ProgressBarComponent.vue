<template>

  <section class="step-wizard">
    <ul class="step-wizard-list">
      <li class="step-wizard-item" id="progressStep1">
        <span class="progress-count"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z" />
          </svg></span>
        <span class="progress-label">Name</span>
      </li>
      <li class="step-wizard-item" id="progressStep2">
        <span class="progress-count">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
          </svg>
        </span>
        <span class="progress-label">Datum</span>
      </li>
      <li class="step-wizard-item" id="progressStep3">
        <span class="progress-count">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
          </svg>
        </span>
        <span class="progress-label">Ort</span>
      </li>
      <li class="step-wizard-item" id="progressStep4">
        <span class="progress-count">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" />
          </svg>
        </span>
        <span class="progress-label">Bring mit</span>
      </li>
      <li class="step-wizard-item" id="progressStep5">
        <span class="progress-count">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
        </span>
        <span class="progress-label">Fertig</span>
      </li>
    </ul>
  </section>

</template>

<script>
export default {
  name: 'ProgressBarComponent',
  props: {
  }
}
</script>
  
<style scoped>
.step-wizard-list {
  color: #333;
  list-style-type: none;
  border-radius: 10px;
  display: flex;
  padding: 0px 10px;
  position: relative;
  z-index: 10;
  width: 340px;
}

.step-wizard-item {
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
}

.step-wizard-item+.step-wizard-item:after {
  content: "";
  position: absolute;
  left: 0;
  top: 15px;
  background: #C93F08;
  width: 100%;
  height: 2px;
  transform: translateX(-50%);
  z-index: -10;
}


.progress-count {
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 600;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  color: transparent;
  fill: transparent;
}

.progress-count svg {
  width: 15px;
}

.progress-count:after {
  content: "";
  height: 30px;
  width: 30px;
  background: #C93F08;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: -10;
}

.progress-count:before {
  content: "";
  height: 5px;
  width: 10px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%) rotate(-45deg);
  transform-origin: center center;
}

.progress-label {
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
  font-family: bahnschrift;
  color: #C93F08;
}

.current-item .progress-count:before,
.current-item~.step-wizard-item .progress-count:before {
  display: none;
}

.current-item~.step-wizard-item .progress-count:after {
  height: 10px;
  width: 10px;
}

.current-item~.step-wizard-item .progress-label {
  opacity: 0.5;
}

.current-item .progress-count:after {
  background: #fff;
  border: 2px solid #C93F08;
}

.current-item .progress-count {
  color: #C93F08;
}

.current-item .progress-count svg {
  fill: #C93F08;
}
</style>
  