$(function() {

    function hasClass(elem, className) {
        return elem.className.split(' ').indexOf(className) > -1;
    }
     
    document.addEventListener('click', function (e) {
        if (hasClass(e.target, 'add-score-link')) {
            var last_score_input_element_name = $("#scores input").last().attr("name");
            var last_idx;
            if (last_score_input_element_name === undefined) {
                last_idx = -1                    
            } else {
                last_idx = parseInt(last_score_input_element_name.split("_").pop());
            }
            $("<input/>", {type: 'text',name: 'score_' + (last_idx+1),value: '500'}).appendTo('#scores');
            $("<a/>", {text: 'x',class: 'remove-score-link'}).appendTo('#scores');
            $("<br/>").appendTo('#scores');
        } else if (hasClass(e.target, 'remove-score-link')) {
            $(e.target).prev().remove();
            $(e.target).next().remove();
            $(e.target).remove();
        }
    }, false);

});
