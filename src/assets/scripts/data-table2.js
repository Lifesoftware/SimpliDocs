$(document).ready(function() {
 
    setTimeout(function() {
        $('#datatable-2').DataTable({
            "lengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]]
        });
    },500)
    
} );