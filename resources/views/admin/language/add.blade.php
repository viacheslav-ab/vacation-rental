@extends('layouts/admin')
@section('admin-content')        
@include('admin/common/side')	

<div class="pcoded-content">
    <div class="pcoded-inner-content">
        <div class="main-body">
            <div class="page-wrapper">
                <div class="page-header">
                    <div class="page-header-title">
                        <h4>Language Manage</h4>
                    </div>
                    <div class="page-header-breadcrumb">
                        <ul class="breadcrumb-title">
                            <li class="breadcrumb-item">
                                <a href="{{route('admin.dashboard')}}" aria-label="Home">
                                    <i class="icofont icofont-home"></i>
                                </a>
                            </li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item"><a href="{{route('admin.language')}}">Language</a></li>
                            <li class="breadcrumb-item">Add</li>
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
                                            <h5>Add Language Form</h5>
                                        </div>                          
                                        <div class="col-sm-3 text-right">
                                            <span class="text-danger">(*)Fields are Mandatory</span>
                                        </div>                          
                                    </div>
                                </div>
                                <div class="card-block">
                                    <form method="POST" action="{{url('admin/add_language')}}"  accept-charset="UTF-8" class="form-horizontal bordered" role="form">
                                        {{ csrf_field() }}
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Name<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <input type="text" name="name" class="form-control"  placeholder="Name" aria-label="Name" required>
                                            </div>
                                        </div>                                          
                                                                            
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Value<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <input type="text" name="value" class="form-control" placeholder="Value" aria-label="Value" required>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Status<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <select name="status" class="form-control form-control-default required" aria-label="Status" required>                                            
                                                    <option value="">Select</option>                                            
                                                    <option value="Active">Active</option>                                            
                                                    <option value="Inactive">Inactive</option> 
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <div class="col-sm-12 text-center">
                                                <button type="submit" id="createuserbtn" class="btn btn-info btn-round">Submit</button>
                                                &nbsp;&nbsp;&nbsp;
                                                <a href="{{route('admin.language')}}" class="btn btn-default btn-round">Cancel</a>
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