const App = Vue.createApp({
    data() {
        return {
            placeholder: "Введите наименование заметки",
            title: "Список заметок",
            inputValue: "",
            notes: []
        }
    },
    created() {
        if (localStorage.getItem("notes") === null) {
            localStorage.setItem('notes', JSON.stringify([]));
        }

        this.notes = JSON.parse(localStorage.getItem("notes"));
    },
    methods: {
        inputChangeHandler(e) {
            this.inputValue = e.target.value;
        },
        addNoteHandler() {
            if (this.inputValue === '') {
                return false;
            }

            const note = {
                id: Date.now(),
                title: this.inputValue
            }

            this.notes.push(note);

            localStorage.setItem('notes', JSON.stringify(this.notes));

            this.inputValue = "";
        },
        removeNoteHandler(id) {
            this.notes = this.notes.filter((note) => note.id !== id);
            localStorage.setItem("notes", JSON.stringify(this.notes));
        }
    },
    computed: {
        doubleCountComputed() {
            return (this.notes.length + 1) * 2;
        }
    }
});

const app = App.mount('#app');