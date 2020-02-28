import React from 'react'
import Axios from 'axios';
import Masks from '../../components/ui_elements/Masks';
import ActionBox from '../../components/action_boxes/ActionBox';
import StepBox from '../../components/step_boxes/StepBox';
import ListingSlider from '../../components/listing_sliders/ListingSlider';
import './staticpage.scss'
export default class StaticPages extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id : null,
            name : null,
            excerpt : null,
            content : null,
            h1_tag : null,
            permalink_parent_name : null,
            meta_title : null,
            children : [],
            under : 'company'
        }
    }
    componentDidMount(){
        Axios.get('/ajax/get/page/' + this.props.match.params.slug)
        .then(response =>{
            console.log(response.data)
            this.setState({
                id : response.data.id,
                name : response.data.name,
                excerpt : response.data.excerpt,
                permalink_parent_name : response.data.permalink_parent_name,
                h1_tag : response.data.h1_tag,
                meta_title : response.data.meta_title,
                image_url : response.data.image_url,
                under : response.data.under,
                template_id : response.data.template_id,
                children : response.data.children,
                content : response.data.content
            })
        })
    }
    render(){

      if(this.state.template_id == null){
        return       <main role="main" id="site-content">
        <div className="">
          <div className="row-space-top-6 row-space-16 text-wrap">
          <p id="page_content" dangerouslySetInnerHTML={{__html: this.state.content}}></p>
          </div>
        </div>
      </main>
      }
      if(this.state.template_id == 8){
        return       <main role="main" id="site-content">
        <div className="">
          <div className="row-space-top-6 row-space-16 text-wrap">
          <p id="page_content" dangerouslySetInnerHTML={{__html: this.state.content}}></p>
          </div>
        </div>
      </main>
      }
      if(this.state.template_id == 1){
        return <main role="main" id="site-content">
        <section className="hg_section--relative p-0">
          <div className="container-fluid no-pad-cols">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                {/* Media container style 2 - with custom minimum height(.min-600) */}
                <div className="media-container style2 min-h-400 d-flex align-items-center justify-content-center">
                  {/* Background with parallax effect */}
                  <div className="kl-bg-source kl-bgSource-imageParallax js-KyHtmlParallax is-fixed">
                    {/* Background image */}
                    <div className="kl-bg-source__bgimage" style={{backgroundImage: `url(${this.state.image_url})`}} />
                    {/*/ Background image */}
                    {/* Color overlay */}
                    <div className="kl-bg-source__overlay" style={{backgroundColor: 'rgba(0,0,0,0.15)'}} />
                    {/*/ Color overlay */}
                    {/* Gloss overlay */}
                    <div className="kl-bg-source__overlay-gloss" />
                    {/*/ Gloss overlay */}
                  </div>
                  {/*/ Background with parallax effect */}
                  <div className="media-container__link media-container__link--btn media-container__link--style-borderanim2 py-2 d-flex flex-column justify-content-center">
                    <div className="row">
                      <div className="borderanim2-svg text-center mx-auto">
                        <svg height={70} width={400} xmlns="http://www.w3.org/2000/svg">
                          <rect className="borderanim2-svg__shape" x={0} y={0} height={70} width={400} />
                        </svg>
                        <span className="media-container__text"> <a    className="white" title={this.state.meta_title}>{this.state.name}</a> </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-10 col-md-12 float-none mx-auto">
                        <div className="text-center pt-1">
                          <h2 className="tbk__title kl-font-alt fs-xs-xl fs-l fw-bold white">
                            {this.state.permalink_parent_name}
                          </h2>
                            {
                                this.state.h1_tag && <div className="row">
                                    <p className="white mt-2 text-center w-100">
                                        <span className="d-block fs-xs-md fs-22">
                                            {this.state.h1_tag}
                                        </span>
                                    </p>
                                </div>
                            }
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Link button with pop-up */}
                </div>
                {/*/ Media container style 2 - with custom minimum height(.min-600) */}
              </div>
              {/*/ col-sm-12 col-md-12 */}
            </div>
            {/*/ row */}
          </div>
          {/*/ container-fluid */}
          <Masks style='3'/>
          
          
        </section>
        <section className="hg_section bg-white pt-40 pb-40">
          <div className="container ">
            <StepBox style = {4}/>
          </div>
          <Masks style={12}/>
        </section>
        <section className="hg_section--relative pt-80 pb-100 mb-0">
          <div className="container ">
            <div className="callout-banner">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-9">
                  <h4 className="m_title">{this.state.excerpt}</h4>
                  <p id="page_content" dangerouslySetInnerHTML={{__html: this.state.content}}></p>
                </div>
                <div className="col-12 col-sm-12 col-md-3">
                    <ActionBox style={5}/>
                  {/* @include('components.action_boxes.style_5') */}
                </div>
              </div>
            </div>
          </div>
          <Masks style={11}/>
        </section>
        <section className="hg_section--relative pb-80 pt-80 mb-0 container">
        <div className="">
          <div className="row">
            <h2 className="wgt-title">
              <span className="tcolor-ext">{this.state.name}</span> Vacation Rentals </h2>
            <div className="col-12">
              <ListingSlider type='state' page_name = {this.state.name} style = {3}/>
              {/* @include('components.listing_widget.listing_slider_style_3',['type' =&gt; 'state']) */}
            </div>
          </div>
        </div>
        <Masks style={6}/>
        
      </section>
      {
        this.state.children.length > 0 && 
        <section className="hg_section--relative p-0 m-0">
        <div className=" p-5">
          <div className="row">
            <div className="col-12 col-sm-12">
              <div className="d-flex justify-content-center" style={{}}>
                <h2 className="title-text fs-jumbo fw-extrabold align-self-center tcolor">
                {
       this.state.children.map((child, index) =>{
        return  <a href={child.permalinkable.template_id == 2 ? `/city/${child.slug}` : ''} title={child.permalinkable.name}>
          {child.permalinkable.name}
      </a> 
       })
     }
                 
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      }
    
      </main>
   
      }
      if(this.state.template_id == 2){
        return <main role="main" id="site-content">
        <section className="hg_section--relative p-0">
          <div className="container-fluid no-pad-cols">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                {/* Media container style 2 - with custom minimum height(.min-600) */}
                <div className="media-container style2 min-h-400 d-flex align-items-center justify-content-center">
                  {/* Background with parallax effect */}
                  <div className="kl-bg-source kl-bgSource-imageParallax js-KyHtmlParallax is-fixed">
                    {/* Background image */}
                    <div className="kl-bg-source__bgimage" style={{backgroundImage: `url(${this.state.image_url})`}} />
                    {/*/ Background image */}
                    {/* Color overlay */}
                    <div className="kl-bg-source__overlay" style={{backgroundColor: 'rgba(0,0,0,0.15)'}} />
                    {/*/ Color overlay */}
                    {/* Gloss overlay */}
                    <div className="kl-bg-source__overlay-gloss" />
                    {/*/ Gloss overlay */}
                  </div>
                  {/*/ Background with parallax effect */}
                  <div className="media-container__link media-container__link--btn media-container__link--style-borderanim2 py-2 d-flex flex-column justify-content-center">
                    <div className="row">
                      <div className="borderanim2-svg text-center mx-auto">
                        <svg height={70} width={400} xmlns="http://www.w3.org/2000/svg">
                          <rect className="borderanim2-svg__shape" x={0} y={0} height={70} width={400} />
                        </svg>
                        <span className="media-container__text"> <a   className="white" title="{{ $page->permalink->seo['meta']['title'] }}">{this.state.name}</a> </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-10 col-md-12 float-none mx-auto">
                        <div className="text-center pt-1">
                          <h2 className="tbk__title kl-font-alt fs-xs-xl fs-l fw-bold white">
                            {this.state.permalink_parent_name}
                          </h2>
                          { 
                            this.state.h1_tag != '' && <p className="white mt-2">
                            <span className="d-block fs-xs-md fs-22">{this.state.h1_tag}</span>
                          </p>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Link button with pop-up */}
                </div>
                {/*/ Media container style 2 - with custom minimum height(.min-600) */}
              </div>
              {/*/ col-sm-12 col-md-12 */}
            </div>
            {/*/ row */}
          </div>
          {/*/ container-fluid */}
          <Masks style = {3}/>
        </section>
        <section className="hg_section bg-white pt-40 pb-40">
          <div className="container ">
            <StepBox style={4}/>
          </div>
          <Masks style={12}/>
        </section>
        <section className="hg_section--relative pt-80 pb-100 mb-0">
          <div className="container ">
            <div className="callout-banner">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-9">
                  <h4 className="m_title">{this.state.excerpt}</h4>
                  <p id="page_content" dangerouslySetInnerHTML = {{__html : this.state.content}}></p>
                </div>
                <div className="col-12 col-sm-12 col-md-3">
                  <ActionBox style = {5}/>
                </div>
              </div>
            </div>
         </div>
         <Masks style = {11}/>
        </section>
        <section className="hg_section--relative pb-80 pt-80 mb-0 container">
          <div className="">
            <div className="row">
              <h2 className="wgt-title">
                <span className="tcolor-ext">{this.state.name}</span> Vacation Rentals </h2>
              <div className="col-12">
                <ListingSlider type = {'city'} style = {3} page_name = {this.state.name}/>
              </div>
            </div>
          </div>
          <Masks style = {6}/>
        </section>
        <section className="hg_section--relative p-0 m-0">
          <div className=" p-5">
            <ListingSlider style = {2} type = {'state'} page_name = {this.state.permalink_parent_name} section_title = {this.state.permalink_parent_name}  />
            {/* @include('components.listing_widget.listing_slider_style_2', ['type' =&gt; 'state','tag'=&gt; $page-&gt;permalink_parent_name,'section_title' =&gt; 'More <span className="tcolor">' . $page-&gt;permalink_parent_name . '</span> Rentals', 'section_desc' =&gt; 'We have a wide selection of Vacation Rentals located in <span className="tcolor">' . $page-&gt;permalink_parent_name . '</span> for you to choose from.  <br /><br />Just find your perfect destination, contact the host &amp; get ready to start your dream vacation!']) */}
          </div>
          <Masks style = {1}/>
          {/* @include('components.ui_elements.masks',['style'=&gt;'1']) */}
        </section>
      </main>
      }
     
      if(this.state.under == 'legal'){

      }
      return <div></div>
      }
}