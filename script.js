const mainPost = {
    mainName: "WhySoSerious45",
    mainComment: "Trying to decide a career path? Programming is the move.Change my mind."
};

$('#userPost').append(`<p>${mainPost.mainName}</p><h1>${mainPost.mainComment}</h1>`);




$('#submitButton').on('click', function(){
    let displayName = document.getElementById("displayName").value;
    let comment = document.getElementById("comment").value;
    if (displayName && comment){
    $('#middleBox').append(
        `<div id="guestPost"> 
            <div id="containerOne">
                <div class="photoBox">
                    <div id="photo"><img src="images/default.png.png"></div>
                </div>
                <div class="contentBox">
                    <div id="guestName"><p>${displayName}</div>
                    <div id="guestComment"><h1>${comment}</div>
                </div>
                <div class="editBox">
                    <div class="edit">Edit</div>
                    <div class="delete">Delete</div>
                </div>
            </div>
            <div id="containerTwo" class="off">
                <form> 
                    <input type="text" id="commentEdit" placeholder="comment"> 
                </form>
                <div class="editSubmit">Submit
                </div>
            </div>
        </div>
        `)
    } else if (displayName === "") {
        alert("Please insert name");
    } else if (comment === "") {
        alert("Please insert comment")
    };  

});


$('#middleBox').on('click','.edit', function(){
    let parent = $(this).parents()[1];
    let sibling = $(parent).next();
    $(sibling).toggleClass('off');
    $(sibling).toggleClass('on');
    console.log(sibling);
});

$('#middleBox').on('click','.delete', function() {
    let parent = $(this).parents()[2];
    $(parent).remove();
});




$('#middleBox').on('click','.editSubmit', function() {
    let parent = $(this).parents()[1];
    let child = $(parent).children()[0];
    let content = $(child).children()[1];
    let contentChild = $(content).children()[1];
    
    let one = $(this).parents()[0];
    let two = $(one).children()[0];
    let three = $(two).children()[0];
    commentEdit = $(three).val();
    
   if (commentEdit) {
        $(contentChild).remove();
        $(content).append(`<h1>${commentEdit}`);

        let toggle = $('.editSubmit').parents()[0];
        $(toggle).toggleClass('on');
        $(toggle).toggleClass('off');
    } else if (commentEdit === "") {
        alert("Please resubmit comment");
    }
});
//$(slonk).append(`<p class="test">TEST TEST TEST</p>`)
