Vue.component('bu-modal', {
    props: ['content'],
    template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
         <div class="box"><slot></slot></div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>    
    `
});
Vue.component('md-card', {
    props: ['title', 'body', 'button'],
    data() {
        return {
            isVisible: true
        }
    },
    methods: {
        hideCard() {
            this.isVisible = false;
        }
    },
    template: `
    <div class="demo-card-square mdl-card mdl-shadow--2dp" v-show="isVisible">
        <div class="mdl-card__title mdl-card--expand">
            <h2 class="mdl-card__title-text">{{ title }}</h2>
        </div>
        <div class="mdl-card__supporting-text">{{ body }}</div>
        <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                {{ button }}
            </a>
        </div>
        <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" @click="hideCard">
              <i class="material-icons">share</i>
            </button>
        </div>
    </div>
   `
});

Vue.component('task-list', {
    template: `
    <div>
        <task v-for="task in tasks">{{ task.name }}</task>
    </div>
    `,
    data() {
        return {
            tasks: [
                {name: 'Jesus', completed: false},
                {name: 'te', completed: true},
                {name: 'ama!', completed: false},
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root',
    data: {
        showModal: false
    }
});