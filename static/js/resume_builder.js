$(function() {

    function hasClass(elem, className) {
        return elem.className.split(' ').indexOf(className) > -1;
    }
     
    document.addEventListener('click', function (e) {
        if (hasClass(e.target, 'add-skill-link')) {
            var idx = $('#skills').is(':empty') ? -1 : parseInt(last_skill_input_element_name.split("_").pop());
            $("<input/>", {type: 'text',name: 'skill_' + (idx+1),value: ''}).appendTo('#skills');
            $("<a/>", {text: 'x',class: 'remove-skill-link'}).appendTo('#skills');
            $("<br/>").appendTo('#skills');
        } else if (hasClass(e.target, 'remove-skill-link')) {
            $(e.target).prev().remove();
            $(e.target).next().remove();
            $(e.target).remove();
        }
    }, false);

});
