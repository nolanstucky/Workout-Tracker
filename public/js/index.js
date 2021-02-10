$(document).ready(function () {
    $('.modal').modal();

    $('#create-workout').on("click", function () {
        $('#workoutModal').modal('open');
        console.log("test");
    })

    $('#add-workout').on("click", function () {

        // let newWorkout = {
        //     day: $('#excercise-day').val().trim(),

        //     exercises:[{
        //         weight: $('#excercise-weight').val().trim(),
        //         reps: $('#excercise-reps').val().trim(),
        //         sets: $('#excercise-sets').val().trim(),
        //         distance: $('#excercise-distance').val().trim(),
        //         type: $('#excercise-type').val().trim(),
        //         name: $('#excercise-name').val().trim(),
        //     }]
        // }
        let testWorkout = {
            day: "Monday",
            exercises:[{
                weight: 200,
                reps: 5,
                sets: 5,
                name: "Bench-Press"
            }]
        }
        $.post("/api/workout", testWorkout).then(data => {

        }).fail(err => {
            alert("Something went wrong")
        })
    })


});