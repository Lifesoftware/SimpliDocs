$(document).ready(function() {
   
    setTimeout(function() {
        $('#datatableTbl').DataTable({
            "lengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
            responsive: true
        });
    },500)
    
} );