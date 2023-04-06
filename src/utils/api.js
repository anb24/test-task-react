class Api {
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }

    _response(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
    }

    getEvents() {
        return fetch(`${this._url}/events`,
            {headers: this._headers,})
            .then(this._response)
    }

    setNewEvent(data) {
        return fetch(`${this._url}/events`,
            {method: 'POST', headers: this._headers,
            body: JSON.stringify({
                name: data.name, date: data.date, time: data.time, lead: data.lead,
                access: data.access, chat: data.chat, link_youtube: data.link_youtube,
                link_stub: data.link_stub, link_users: data.link_users
            })})
            .then(this._response)
    }

    deleteEvent(id) {
        return fetch(`${this._url}/events/${id}`,
            {method: 'DELETE', headers: this._headers})
            .then(this._response)
    }

}

const api = new Api({
    url: 'http://localhost:3007',
    headers: {'Content-Type': 'application/json'}
})

export default api;
