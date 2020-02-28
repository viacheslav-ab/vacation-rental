@extends('layouts/admin')

@section('styles')
@include('admin/common/select2_styles')
@endsection

@section('admin-content')
@include('admin/common/side')
<div class="pcoded-content">
    <div class="pcoded-inner-content">
        <div class="main-body">
            <div class="page-wrapper">
                <div class="page-header">
                    <div class="page-header-title">
                            <h4>Metas Manage</h4>
                    </div>
                    <div class="page-header-breadcrumb">
                        <ul class="breadcrumb-title">
                            <li class="breadcrumb-item">
                                <a href="{{route('admin.dashboard')}}" aria-label="Home">
                                    <i class="icofont icofont-home"></i>
                                </a>
                            </li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item"><a href="{{route('admin.metas')}}">Metas</a></li>
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
                                            <h5>Add Meta Form</h5>
                                        </div>                          
                                        <div class="col-sm-3 text-right">
                                            <span class="text-danger">(*)Fields are Mandatory</span>
                                        </div>                          
                                    </div>
                                </div>
                                <div class="card-block">
                                    <form method="POST" action="{{url('admin/add_meta')}}"  accept-charset="UTF-8" class="form-horizontal bordered" role="form">
                                        {{ csrf_field() }}
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Page URL<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <select name="url" class="form-control form-control-default required select2" aria-label="Page URL" required>                                        
                                                    <optgroup label="Listings">
                                                        @foreach($rooms as $room)
                                                            <option value="{{$room->address_url . '/' . $room->id}}" >{{$room->id}}</option>
                                                        @endforeach
                                                    </optgroup>
                                                    <optgroup label="Pages">
                                                        @foreach($pages as $page)
                                                            <option value="{{$page->url}}">{{$page->name . ' | ' . $page->id }}</option>
                                                        @endforeach
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Meta Title<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <input type="text" name="title" class="form-control" placeholder="Meta Title" aria-label="Meta Title" required>
                                            </div>
                                        </div>   
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">H1 Tag<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <input type="text" name="meta_h1" class="form-control" placeholder="H1 Tag" aria-label="H1 Tag" required>
                                            </div>
                                        </div>   
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Meta Description<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <textarea type="text" name="description" class="form-control" placeholder="Meta Description" aria-label="Meta Description" required></textarea>
                                            </div>
                                        </div>   
                                        
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label text-right">Keywords<span class="text-danger">*</span></label>
                                            <div class="col-sm-6">
                                                <textarea type="text" name="keywords" class="form-control"  placeholder="Keywords" aria-label="Keywords" required></textarea>
                                            </div>
                                        </div>                               

                                        <div class="form-group row">
                                            <div class="col-sm-12 text-center">
                                                <button type="submit" id="createuserbtn" class="btn btn-info btn-round">Submit</button>
                                                &nbsp;&nbsp;&nbsp;
                                                <a href="{{route('admin.metas')}}" class="btn btn-default btn-round">Cancel</a>
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
<script>
    $('.select2').select2();
</script>
@endsection

@endsection