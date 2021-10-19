const App = {
    data() {
        return {
            placeholder: "Введите наименование заметки",
            title: "Список заметок",
            inputValue: "",
            notes: [
                {id: 1, title: "Наименование", body: "Тело"},
                {id: 2, title: "Наименование", body: "Тело"},
                {id: 3, title: "Наименование", body: "Тело"},
                {id: 4, title: "Наименование", body: "Тело"},
                {id: 5, title: "Наименование", body: "Тело"},
                {id: 6, title: "Наименование", body: "Тело"},
                {id: 7, title: "Наименование", body: "Тело"},
                {id: 8, title: "Наименование", body: "Тело"},
            ]
        }
    },
    methods: {
        inputChangeHandler(e) {
            this.inputValue = e.target.value;
        },
        addNoteHandler(e) {
            if (this.inputValue === '') {
                return false;
            }

            const note = {
                id: this.notes.length + 1,
                body: "Эта заметка добавлена с помощью Vue",
                title: this.inputValue
            }

            this.notes.push(note);
            this.inputValue = "";
        },
        removeNoteHandler(id) {
            this.notes = this.notes.filter((note) => note.id !== id);
        }
    },
    computed: {
        doubleCountComputed() {
            console.log("doubleCountComputed");
            return (this.notes.length + 1) * 2;
        }
    }
};

Vue.createApp(App).mount('#app');