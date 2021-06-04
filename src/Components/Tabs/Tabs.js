import React, { Component } from 'react';
import PropTypes, { array } from 'prop-types'
import './Tabs.css'

class Tabs extends Component {
    constructor(props){
        super(props)
        this.state={
            activeTab : this.props.children[0].props.label
        }
    }
    changeTab=(tab)=>{
        this.setState({
            activeTab : tab
        })
    }
    render() {
        let content;
        let buttons = []
        return (
            <div>
                {
                    React.Children.map(this.props.children,child=>{
                        buttons.push(child.props.label)
                        if (child.props.label === this.state.activeTab) content = child.props.children
                    })
                }
                    <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
                    <div className="tab-content">{content}</div>
            </div>
            // <TabButtons>
            //     <div className="tabs">
            //         <ol className="tab-list">
            //             {
            //                 children.map((child)=>{
            //                     const {label} = child.props
            //                     return(
            //                         <Tab activeTab={activeTab}
            //                         key={label}
            //                         label={label}
            //                         onClick={onClickTabItem}/>
            //                     )
            //                 })
            //             }
            //         </ol>
            //         <div className="tab-content">
            //             {
            //                 children.map((child)=>{
            //                     if (child.props.label !== activeTab) return undefined
            //                     return child.props.children
            //                 })
            //             }
            //         </div>
            //     </div>
            // </TabButtons>
        );
    }
}
const TabButtons = ({buttons,changeTab,activeTab})=>{
    return (
        <div className="tab-buttons">
            {
                buttons.map(button=>{
                    return <button className={button === activeTab ? 'active' : ''} onClick={()=>changeTab(button)}>{button}</button>
                })
            }
        </div>
    )
}


export default Tabs;