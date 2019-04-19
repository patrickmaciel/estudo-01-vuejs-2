Vue.component('task-list', {
    template: `
    <div>
        <task v-for="task in tasks">{{ task.name }}</task>
    </div>
    `,
    data() {
        return {
            tasks: [
                { name: 'Jesus', completed: false },
                { name: 'te', completed: true },
                { name: 'ama!', completed: false },
            ]
        }
    }
});

Vue.component('task', {
   template: '<li><slot></slot></li>'
});

new Vue({
   el: '#root'
});