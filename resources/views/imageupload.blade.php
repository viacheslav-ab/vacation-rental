<!DOCTYPE html>
<html>
    <head>
            <meta name="csrf-token" content="{{ csrf_token() }}">
            <!-- Latest compiled and minified CSS -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
            
            <!-- jQuery library -->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            
            <!-- Popper JS -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            
            <!-- Latest compiled JavaScript -->
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css" >
    </head>
    <body>
        <div class="container">
            <h1>Image Upload</h1>
            <h1>Total {{ count($photos) }}Images</h1>
                <div class="progress">
                        <div class="progress-bar" id='progressbar' role="progressbar" style="width: 0%"   aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
        </div>
        
        <script>
            var imageArray  = {{ json_encode($photos) }}

            jQuery(document).ready(function(){
                 
                   
                   $.ajaxSetup({
                      headers: {
                          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                      }
                  });
                imageUpload(0)
                function imageUpload(index){
                    jQuery.ajax({
                        url: "{{ url('/ImageUploadToCloudinary') }}",
                        method: 'post',
                        data: {
                          id: imageArray[index]
                        },
                        success: function(result){
                           imageUpload(index + 1)
                          $("#progressbar").css('width',((index/imageArray.length) * 100) + '%' );
                        },
                        error : function(error){
                            imageUpload(index + 1)
                          $("#progressbar").css('width',((index/imageArray.length) * 100) + '%' );
                        }});
                    }
                
              });
        </script>
    </body>
</html>