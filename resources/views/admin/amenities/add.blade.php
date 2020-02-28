@extends('layouts/admin')

@section('styles')
@include('admin/common/select2_styles')
@include('admin/common/dropify_styles')
@endsection

@section('admin-content')    
@include('admin/common/side')
<div class="pcoded-content">
    <div class="pcoded-inner-content">
        <div class="main-body">
            <div class="page-wrapper">
                <div class="page-header">
                    <div class="page-header-title">
                            <h4>Amenities Manage</h4>
                    </div>
                    <div class="page-header-breadcrumb">
                        <ul class="breadcrumb-title">
                            <li class="breadcrumb-item">
                                <a href="{{route('admin.dashboard')}}" aria-label="Home">
                                    <i class="icofont icofont-home"></i>
                                </a>
                            </li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item"><a href="{{route('admin.amenities')}}">Amenities</a></li>
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
                                            <h5>Add  Amenities Form</h5>
                                        </div>                          
                                        <div class="col-sm-3 text-right">
                                            <span class="text-danger">(*)Fields are Mandatory</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-block">
                                    <form method="POST" action="{{url('admin/add_amenity')}}" enctype="multipart/form-data"  accept-charset="UTF-8" class="form-horizontal bordered" role="form">
                                        {{ csrf_field() }}
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Type<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <select name="type_id"  class="form-control form-control-default required select2" required>                                            
                                                    <option value="">Select</option>
                                                        @foreach($types as $type)            
                                                            <option value="{{$type->id}}">{{$type->name}}</option> 
                                                        @endforeach
                                                </select>
                                            </div>
                                        </div>   
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Name<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <input type="text" name="name" class="form-control"  placeholder="name" aria-label="Name" required>
                                            </div>
                                        </div>                                          
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Description</label>
                                            <div class="col-sm-6">
                                                <textarea type="text" name="description" class="form-control required" placeholder="Write Description..." aria-label="Description" required></textarea>
                                            </div>
                                        </div>  
                                        
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Icon<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <input type="file" name="image" id="input-file-now1" class="dropify required" aria-label="Icon" required />
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
                                                <a href="{{route('admin.amenities')}}" class="btn btn-default btn-round">Cancel</a>
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

@section('scripts')
@include('admin/common/select2_scripts')
@include('admin/common/dropify_scripts')
<script>
    $('.select2').select2();
    $('.dropify').dropify();
</script>
@endsection

@endsection
