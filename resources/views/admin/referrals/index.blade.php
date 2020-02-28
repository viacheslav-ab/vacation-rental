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
                        <h4>User Management</h4>
                    </div>
                    <div class="page-header-breadcrumb">
                        <ul class="breadcrumb-title">
                            <li class="breadcrumb-item">
                                <a href="{{route('admin.dashboard')}}" aria-label="Home">
                                    <i class="icofont icofont-home"></i>
                                </a>
                            </li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item">Referrals</li>
                        </ul>
                    </div>
                </div>
                <div class="page-body">
                    <div class="row">                 
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-header table-card-header text-right">                            
                                    <a href="{{url('admin/add_referral')}}" class="btn btn-primary">Add Referrals</a>
                                </div>
                                <div class="card-block">
                                    @include('admin/common/flash-message')

                                    @yield('content')
                                    <div class="dt-responsive table-responsive">
                                    <table id="basic-btn" class="table table-striped table-bordered nowrap">
                                        <thead>
                                            <tr>
                                            <th>ID</th>
                                            <th>Referrer Name</th>
                                            <th>Signup Count</th>
                                            <th>Booking Count</th>
                                            <th>Listing Count</th>                        
                                            <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @if(count($data) != 0)
                                                @foreach($data as $item)
                                                    @php
                                                        $i = 0;
                                                    @endphp
                                                    @foreach($item as $row)
                                                        @php
                                                            $i++;
                                                            if($i == 1){
                                                        @endphp
                                                        <tr>
                                                            <td>{{$row->user_id}}</td>
                                                            <td>{{$row->getUsernameByID()}}</td>
                                                            <td>{{$row->countSignup()}}</td>   
                                                            <td>{{$row->countBooking()}}</td>
                                                            <td>{{$row->countListing()}}</td>
                                                            
                                                            <td class="text-center">
                                                                <a href="{{url( 'admin/referrals_details/' . $row->user_id )}}" class="btn btn-xs btn-primary" data-toggle="tooltip" title="" data-original-title="Edit" aria-label="Edit Referrals">
                                                                    <i class="icofont icofont-eye-alt"></i>
                                                                </a>                                                        
                                                            </td>                            
                                                        </tr>
                                                        @php
                                                            }
                                                        @endphp
                                                    @endforeach
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