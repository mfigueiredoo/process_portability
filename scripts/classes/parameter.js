class Parameter {
    constructor(description, data) {
        this.description = description
        this.data = data || []

    }
    addData = (param_data) => {
        if (!param_data) return
        this.data.push(param_data)
    }
}

export default Parameter