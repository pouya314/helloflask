$(function() {
    // utility functions:
    function hasClass(elem, className) {
        return elem.className.split(' ').indexOf(className) > -1;
    }
    function is_container_empty(elem) { 
        return !$.trim( elem.html() ).length;
    }

    // page js
    document.addEventListener('click', function (e) {
        if (hasClass(e.target, 'add-skill-link')) {
            var idx = is_container_empty($("#skills")) ? -1 : parseInt($("#skills").find("input").last().attr("name").split("_").pop());
            $("<input/>", {type: 'text', name: 'skill_'+(idx+1)}).appendTo('#skills');
            $("<a/>", {text: 'x',class: 'remove-skill-link'}).appendTo('#skills');
            $("<br/>").appendTo('#skills');
        } else if (hasClass(e.target, 'remove-skill-link')) {
            $(e.target).prev().remove();
            $(e.target).next().remove();
            $(e.target).remove();
        }
    }, false);
});
