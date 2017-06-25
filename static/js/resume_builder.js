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
        e.preventDefault();
        if (hasClass(e.target, 'add-skill-link')) {
            var idx;
            if(is_container_empty($("#skills"))){
                idx = 0;
            } else {
                var _arr = $("#skills")
                    .find(".skill")
                    .map(function() {
                        return $(this).find("input").attr("name").split("_").pop();
                    })
                    .get();
                idx = Math.max.apply(Math,_arr) + 1; // No need for parseInt(), retval is already a number
            }
            var skill_div = $("<div/>", {class: "skill"});
            $("<input/>", {type: 'text', name: 'skill_'+idx}).appendTo(skill_div);
            $("<a/>", {text: 'x',class: 'remove-skill-link'}).appendTo(skill_div);
            $("<br/>").appendTo(skill_div);
            skill_div.appendTo("#skills");
        } else if (hasClass(e.target, 'remove-skill-link')) {
            $(e.target).closest("div.skill").remove();
        }
    }, false);


    // sortables
    $( "#skills" ).sortable();
    $( "#skills" ).disableSelection();
    $( "#sections" ).sortable();
    $( "#sections" ).disableSelection();
});
