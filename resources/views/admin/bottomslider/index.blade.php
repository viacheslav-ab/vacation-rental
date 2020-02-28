@extends('layouts/admin')

@section('styles')
@include('admin/common/datatable_styles')
@endsection

@section('admin-content')
@include('admin/common/side')
<div class="pcoded-content">
    <div class="pcoded-inner-content">
        <div class="main-body">
            <div class="page-wrapper">
                <div class="page-header">
                    <div class="page-header-title">
                        <h4>Bottom Slider Manage</h4>
                    </div>
                    <div class="page-header-breadcrumb">
                        <ul class="breadcrumb-title">
                            <li class="breadcrumb-item">
                                <a href="{{route('admin.dashboard')}}" aria-label="Home">
                                <i class="icofont icofont-home"></i>
                                </a>
                            </li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item">Bottom Slider</li>
                        </ul>
                    </div>
                </div>
                <div class="page-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-header table-card-header text-right">                            
                                    <a href="{{url('admin/add_bottom_slider')}}" class="btn btn-primary">Add Bottom Slider</a>
                                </div>
                                <div class="card-block">
                                    @include('admin/common/flash-message')
                                    @yield('content')
                                    <div class="dt-responsive table-responsive">
                                        <table id="basic-btn" class="table table-striped table-bordered nowrap">
                                            <thead>
                                                <tr>
                                                <th>ID</th>
                                                <th>Image</th>                         
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                                <th class="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @if(count($data) != 0)
                                                    @foreach($data as $row)
                                                        <tr>
                                                            <td>{{$row->id}}</td>                            
                                                            <td><img aria-label="Bottom Slider Image" src="{{asset("images/bottom_slider/$row->image")}}" style="height:100px"></td>
                                                            <td>{{$row->title}}</td>
                                                            <td>{{$row->description}}</td>
                                                            <td>{{$row->status}}</td>                            
                                                            <td class="text-center">
                                                                <a href="{{url( 'admin/edit_bottom_slider/' . $row->id )}}" class="btn btn-xs btn-primary" data-toggle="tooltip" title="" data-original-title="Edit" aria-label="Edit Bottom Slider">
                                                                    <i class="icofont icofont-edit"></i>
                                                                </a>
                                                                &nbsp;
                                                                <button data-id="{{ $row->id }}" class="btn btn-xs btn-danger delete-btn" aria-label="Edit bottom slider">
                                                                    <i class="icofont icofont-ui-delete"></i>
                                                                </button>
                                                            </td>                            
                                                        </tr>
                                                    @endforeach
                                                @endif
                                            </tbody>                                
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="default-Modal" tabindex="-1" role="dialog" style="z-index: 1050; display: none;" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <form method="POST" action="{{url('admin/delete_bottom_slider')}}" accept-charset="UTF-8" class="form-horizontal bordered" role="form">
                                {{ csrf_field() }}
                                <input type="hidden" value="" name="did" id="did">
                                <div class="modal-header">
                                    <h4 class="modal-title">Delete Confirm</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">                                
                                    <h5 class="text-danger text-center">Are you Sure?</h5>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default waves-effect " data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary waves-effect waves-light ">Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="styleSelector"></div>
            </div>
        </div>
    </div>
</div>

@section('scripts')
@include('admin/common/datatable_scripts')
<script>
    $(document).ready(function() {
        $('#basic-btn').DataTable({
            dom: 'lBfrtip',
            buttons: [{
                extend: 'copyHtml5',
                exportOptions: {
                    columns: [0, ':visible']
                }
            }, {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: ':visible'
                }
            }, {
                extend: 'pdfHtml5',
                exportOptions: {
                    columns: [0, 1, 2, 5]
                }
            },
            'colvis'            
        ],
        "order": [[ 0, "desc" ]]
        });   

        $(document).on('click', '.delete-btn', function(){
            var did = $(this).attr('data-id');
            $('#did').val(did);
            $('#default-Modal').modal("show");
        });    
    });
</script>
@endsection

@endsection