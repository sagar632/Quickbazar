import { Component, OnInit ,ViewChild} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Feedback,ContactType}from '../shared/feedback';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  feedbackForm:FormGroup;
    feedbackFormcopy:FormGroup;
    feedback:Feedback;
    contact=ContactType;
    feedbackcopy:Feedback;
    errmsg:string;
    spinner:boolean;
    showfeedback:Feedback;
 show:boolean;
   @ViewChild('fform') feedbackFormDirective; 

  constructor(private fb :FormBuilder) { this.createform();}

  ngOnInit(): void {
  }
  createform(){
  	  this.feedbackForm= this.fb.group({
            firstname:['',Validators.required],
            lastname:['',Validators.required],
            telnum:['',Validators.required],
            email:['',Validators.required],
            agree:false,
            cont:'None',
            message:''
        });
       
  }
  onsubmit(){
  	console.log(this.feedbackForm.value);
  	 this.feedbackcopy=this.feedbackForm.value;
        console.log("before"+this.showfeedback);
       this.spinner=true; this.show=true;
     // this.feedbackservice.submitFeedback(this.feedbackcopy).subscribe(feedback=>{ console.log(this.feedbackForm);this.showfeedback=feedback;console.log("after"+this.showfeedback);this.spinner=false;this.remove()},err=>this.errmsg=err);
        //this.removeshowfeedback();
        this.showfeedback=undefined;console.log(this.feedback);
        this.feedbackForm.reset({
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            cont:'None',
            message:'',
          
        });
        this.feedbackFormDirective.resetForm();
  } remove(){
        setTimeout(()=>{this.show=false;console.log("hellp")},5000);
   } 

}
