import buttons  from'../components/Button/Button'
import Cards  from'../components/Cards/Cards'
import Color from '../components/Color/Color'
import Border from '../components/Border/Border'
import Animations from '../components/Animations/Animations'
import Other from '../components/Other/Other'
import Tables from '../components/Tables/Tables'

const MenuJson = [ 
                { 
                    items:[
                        {
                            items_perent:'Dashboard',
                            icon:'fa-tachometer-alt',
                            path:'./dashboard'
                        }
                    ]
                },     
                {
                    elementheading:'Interface',
                    items:[
                        {
                            items_perent:'Components',
                            ariacontrols:'collapseTwo',
                            datatarget:'#collapseTwo',
                            id:'collapseTwo',
                            icon:'fa-cog',
                            items_child:[
                                {
                                    name:'Buttons',
                                    path:'./buttons',
                                    component: buttons,
                                },
                                {
                                    name:'Cards',
                                    path:'./cards',
                                    component: Cards,
                                }
                            ],
                        },
                        {
                         
                                    items_perent:'Utilities',
                                    ariacontrols:'collapseUtilities',
                                    datatarget:'#collapseUtilities',
                                    icon:'fa-wrench',
                                    id:'collapseUtilities',
                                    items_child:[
                                        {
                                            name:'Colors',
                                            path:'./colors',
                                            component: Color

                                        },
                                        {
                                            name:'Borders',
                                            path:'./borders',
                                            component: Border
                                        },
                                        {
                                            name:'Animations',
                                            path:'./animations',
                                            component: Animations
                
                                        },
                                        {
                                            name:'Other',
                                            path:'./other',
                                            component: Other
                
                                        }
                                    ]
                        }
                    ]
                                
                    },
                        {
                            elementheading:'Addons',
                            items:[
                                {
                                    items_perent:'Charts',
                                    icon:'fa-chart-area',
                                    path:'./charts'

                
                                },
                                {
                                    items_perent:'Tables',
                                    icon:'fa-table',
                                    path:'./tables',
                                    component: Tables,
                
                                }

                            ]
                        
                 
        
                },

                

            ]


export default  MenuJson;                  