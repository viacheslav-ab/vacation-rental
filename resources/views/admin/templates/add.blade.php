@extends('layouts/admin')
@section('admin-content')        
@include('admin/common/side')	

<div class="pcoded-content">
   <div class="pcoded-inner-content">
      <div class="main-body">
         <div class="page-wrapper">
            <div class="page-header">
               <div class="page-header-title">
                    <h4>Templates Manage</h4>
               </div>
               <div class="page-header-breadcrumb">
                  <ul class="breadcrumb-title">
                     <li class="breadcrumb-item">
                        <a href="{{route('admin.dashboard')}}" aria-label="Home">
                        <i class="icofont icofont-home"></i>
                        </a>
                     </li>
                     <li class="breadcrumb-item"><a href="#">Pages</a></li>
                     <li class="breadcrumb-item"><a href="{{route('admin.templates')}}">Templates</a></li>
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
                                <h5>Add Template Form</h5>
                            </div>                          
                            <div class="col-sm-3 text-right">
                                <span class="text-danger">(*)Fields are Mandatory</span>
                            </div>                          
                        </div>                          
                        
                        
                    </div>
                    <div class="card-block">
                        <form method="POST" action="{{url('admin/add_template')}}"  accept-charset="UTF-8" class="form-horizontal bordered" role="form">
                                {{ csrf_field() }}

                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label text-right">Name<span class="text-danger">*</span></label>
                                <div class="col-sm-6">
                                    <input type="text" name="name" class="form-control"  placeholder="name" required>
                                </div>
                            </div>    
                            
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label text-right">Type<span class="text-danger">*</span></label>
                                <div class="col-sm-6">
                                    <input type="text" name="type" class="form-control"  placeholder="Type" required>
                                </div>
                            </div>    
                            
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label text-right">Action<span class="text-danger">*</span></label>
                                <div class="col-sm-6">
                                    <input type="text" name="action" class="form-control"  placeholder="Action" required>
                                </div>
                            </div>    
                            

                            <div class="form-group row">
                                <div class="col-sm-12 text-center">
                                    <button type="submit" id="createuserbtn" class="btn btn-info btn-round">Submit</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="{{route('admin.templates')}}" class="btn btn-default btn-round">Cancel</a>
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
 
@stop