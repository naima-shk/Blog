import React ,{Component} from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle, CardText, CardActions,Button,CardMenu,IconButton} from 'react';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }
     togglecategories(){
         if(this.state.activeTab===0){
             return(
                 <div className="project-grid">
                <Card  shadow={5}  style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(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) centre/ cover'}}></CardTitle>
                    <CardText>my project</CardText>
                    <CardActions border>
                    <Button colored>git hub </Button>
                    <Button colored>live demo </Button>
                    </CardActions>
                    <CardMenu  style={{color:'#fff'}}>
                    <IconButton name="share"/>
                    </CardMenu>
                    
                    </Card>
                    </div>
                  )
     }
    }
     /*else if(this.state.activeTab===1){
         return(
             <div><h1>this is WordPress</h1></div>
         )
     }else (this.state.activeTab===2)
     {
         return(
             <div><h1>this is HTML/CSS</h1></div>
         )
         }
        }*/
    render(){
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(TabId) => this.setState({activeTab: TabId})} ripple>
             <Tab>React</Tab>
             <Tab>Html/css</Tab>
             <Tab>WordPress</Tab>
             </Tabs>

   <section className='projects-grid'>
   <Grid className="project-grid">
       <Cell col={12}>
    <div className="content">{this.togglecategories()}</div>
       </Cell>
   </Grid>
   
   </section>
            </div>
        )
    }
}
        

  export default Projects;