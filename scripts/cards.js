import InjectionMoldingMachine from "./classes/injectionMoldingMachine.js"
import ParamData from "./classes/paramData.js"
import Parameter from "./classes/parameter.js"
import Cookies from "./cookies.js"
import ResultTable from "./resultTable.js"
import Scroll from "./scrollAnimation.js"
import Settings from "./settings.js"



var Card = {
    show : (card_element, card_id) => {
        $(card_element).css("display", "flex")
        Scroll.to($(card_element))
    },
    hide : (card_element, card_id) => {
        $(card_element).css("display", "none")
    },
    update : (card_element, card_id) => {
        let form_parameters = getParameterValuesFromControls()
        if (!form_parameters){

            if ($(e.currentTarget).hasClass("error")) {
                console.log()
                setTimeout(() => {
                    $(e.currentTarget).removeClass("error");
                }, 10);
            }

            setTimeout(() => {
                $(e.currentTarget).addClass("error")
            }, 20);
            
            return
        }

        let table_content = getUpdatedResult(getParameterValuesFromControls())
        ResultTable.create($("#absolute-result-card-controls")[0], table_content)
    }
}

//======= EVENTS =======

var getUpdatedResult = (form_parameters) => {
    let from_cookie_str = Cookies.getCookie("from_machine")
    let to_cookie_str = Cookies.getCookie("to_machine")

    if (from_cookie_str == "" || to_cookie_str == "") return

    let from_machine_obj = JSON.parse(from_cookie_str)
    let to_machine_obj = JSON.parse(to_cookie_str)

    let from_machine = new InjectionMoldingMachine(from_machine_obj.name, from_machine_obj.screw_diameter_mm)
    let to_machine = new InjectionMoldingMachine(to_machine_obj.name, to_machine_obj.screw_diameter_mm)

    from_machine.setParameters(form_parameters)
    Cookies.updateCookie("from_machine", JSON.stringify(from_machine), Settings.cookiesDuration_days)

    to_machine.setParameters(from_machine.getPortableParameters())
    Cookies.updateCookie("to_machine", JSON.stringify(to_machine), Settings.cookiesDuration_days)

    let controls_labels = $(".card-controls-control-text")
    let table_content = ""

    for(let i = 0; i < controls_labels.length; i++) {
        if (i == 0){
            table_content += '<table class=\"result-table\"><tr><th id=\"result-table-header-not-used-cell\"></th>'
            for(let k = 0; k < Settings.resultTable_headers.length; k++ ) {
                table_content += '<th>' + Settings.resultTable_headers[k] + '</th>'
            }
            table_content += '</tr>'
        }

        table_content += '<tr><th>' + $(controls_labels[i]).html() + '</th>'
        
        for(let k = 0; k < Settings.parameters_labels_select_option_html_values.length; k++ ) {

            let hasData = false

            to_machine.parameters.forEach( (to_mach_p, param_k) => {
                hasData = false
                if (to_mach_p.description == $(controls_labels[i])[0].id){
                    to_mach_p.data.forEach( (to_mach_p_d) => {
                        if (to_mach_p_d.unit == Settings.parameters_labels_select_option_html_values[k]) {
                            table_content += '<td class="result-table-data">' + to_mach_p_d.value.toFixed(3) + '</td>'
                            hasData = true
                            return
                        }
                    })


                    if (!hasData) {
                        table_content += '<td></td>'
                    }

                    return
                }
            })            

        }
        table_content += '</tr>'
    }
    table_content += '</table>'


    return table_content

}

var getParameterValuesFromControls = () => {
    let parameters = []
    let hasNotParametersPresent = true

    for(let i = 0; i < Settings.parameters_labels_p_htmlIDs.length; i++) {
        let elem_id = $("#" + Settings.parameters_labels_p_htmlIDs[i])[0].id
        let elem_value = Number($("#" + elem_id + "-val")[0].value)
        let elem_unit = $("#" + elem_id + "-units")[0].value

        if (elem_value != "") {
            let param = new Parameter(elem_id, [new ParamData(elem_value, elem_unit)])
            parameters.push(param)
            hasNotParametersPresent = false
        }
    }

    if (hasNotParametersPresent) return false
    return parameters

}

$("#content-controls-result-button").on("click", (e) => {

    let form_parameters = getParameterValuesFromControls()

    if (!form_parameters){

        if ($(e.currentTarget).hasClass("error")) {
            console.log()
            setTimeout(() => {
                $(e.currentTarget).removeClass("error");
            }, 10);
        }

        setTimeout(() => {
            $(e.currentTarget).addClass("error")
        }, 20);
        
        return
    }

    
    let table_content = getUpdatedResult(getParameterValuesFromControls())


    ResultTable.create($("#absolute-result-card-controls")[0], table_content)
    Card.show($("#content-absolute-result")[0], "content-absolute-result")
})

export default Card