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
                        <h4>Subscriptions Manage</h4>
                    </div>
                    <div class="page-header-breadcrumb">
                        <ul class="breadcrumb-title">
                            <li class="breadcrumb-item">
                                <a href="{{route('admin.dashboard')}}" aria-label="Home">
                                <i class="icofont icofont-home"></i>
                            </a>
                            </li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item">Subscriptions</li>
                        </ul>
                    </div>
                </div>
                <div class="page-body">
                    <div class="row">                    
                        <div class="col-sm-12">
                            <div class="card">                    
                                <div class="card-block">
                                    @include('admin/common/flash-message')
                                    @yield('content')
                                    <div class="dt-responsive table-responsive">
                                        <table id="basic-btn" class="table table-striped table-bordered nowrap">
                                            <thead>
                                                <tr>
                                                <th>ID</th>
                                                <th>User Name</th>  
                                                <th>Room ID</th>                          
                                                <th>Subscription End Date</th>                         
                                                <th class="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @if(count($data) != 0)
                                                    @foreach($data as $row)
                                                        <tr>
                                                            <td>{{$row->id}}</td>                            
                                                            <td><a href="edit_user/{{$row->host_id}}" aria-label="Edit user">{{$row->getUserNameByHostID()}}</a></td>                                                       
                                                            <td><a href="edit_room/{{$row->room_id}}" aria-label="Edit room">{{$row->getRoomNameByRoomID()}}</a></td>  
                                                            <td>{{$row->subscription_end_date}}</td>          
                                                            <td class="text-center" style=" width:50px;">
                                                                <a href="{{url( 'admin/detail_subscription_free/' . $row->id )}}" class="btn btn-xs btn-primary" data-toggle="tooltip" title="" data-original-title="Edit" aria-label="Edit">
                                                                    <i class="icofont icofont-eye"></i>
                                                                </a>                               
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

        
    });
</script>
@endsection

@endsection