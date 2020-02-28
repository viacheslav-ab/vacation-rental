@extends('layouts/admin')
@section('admin-content')        
@include('admin/common/side')	

<div class="pcoded-content">
    <div class="pcoded-inner-content">
        <div class="main-body">
            <div class="page-wrapper">
                <div class="page-header">
                    <div class="page-header-title">
                        <h4>Country Manage</h4>
                    </div>
                    <div class="page-header-breadcrumb">
                        <ul class="breadcrumb-title">
                            <li class="breadcrumb-item">
                                <a href="{{route('admin.dashboard')}}" aria-label="Home">
                                    <i class="icofont icofont-home"></i>
                                </a>
                            </li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item"><a href="{{route('admin.country')}}">Country</a></li>
                            <li class="breadcrumb-item">Edit</li>
                        </ul>
                    </div>
                </div>
                <div class="page-body">
                    <div class="row">                    
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-header table-card-header">  
                                    <div class="row">
                                        <div class="col-sm-9 text-left">
                                            <h5>Edit Country Form</h5>
                                        </div>                          
                                        <div class="col-sm-3 text-right">
                                            <span class="text-danger">(*)Fields are Mandatory</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-block">
                                    <form method="POST" action="{{url('admin/edit_country/'.$country->id)}}"  accept-charset="UTF-8" class="form-horizontal bordered" role="form">
                                        {{ csrf_field() }}
                                        <input type="hidden" value="{{$country->id}}" name="id">
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Short Name<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <input type="text" name="short_name" value="{{$country->short_name}}" class="form-control"  placeholder="Short Name" aria-label="Short Name" required>
                                            </div>
                                        </div>                                          
                                                                                
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Long Name<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <input type="text" name="long_name" value="{{$country->long_name}}"  class="form-control" placeholder="Long Name" aria-label="Long Name" required>
                                            </div>
                                        </div>                                          
                                                                                
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Iso3<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <input type="text" name="iso3" value="{{$country->iso3}}" class="form-control" placeholder="Iso3" aria-label="Iso3" required>
                                            </div>
                                        </div>                                          
                                                                                
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Num Code<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <input type="text" name="num_code" value="{{$country->num_code}}" class="form-control" placeholder="Num Code" aria-label="Num Code" required>
                                            </div>
                                        </div>                                          
                                                                                
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Phone Code<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <input type="text" name="phone_code" value="{{$country->phone_code}}" class="form-control" placeholder="Phone Code" aria-label="Phone Code" required>
                                            </div>
                                        </div>                                          
                                            
                                        <div class="form-group row">
                                            <div class="col-sm-12 text-center">
                                                <button type="submit" id="createuserbtn" class="btn btn-info btn-round">Submit</button>
                                                &nbsp;&nbsp;&nbsp;
                                                <a href="{{route('admin.currency')}}" class="btn btn-default btn-round">Cancel</a>
                                            </div>
                                        </div>
                                    </form>
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
 
@stop