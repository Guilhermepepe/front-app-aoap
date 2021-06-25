import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../src/pages/Login';
import cadastro from '../src/pages/cadastro';
import Home from '../src/pages/Home';
import Agendamento from '../src/pages/Agendamento'
import MeusAgendamentos from '../src/pages/MeusAgendamentos'
import HomeAdmin from '../src/pages/pagesAdmin/HomeAdmin'
import DashboardAdmin from '../src/pages/pagesAdmin/DashboardAdmin'

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
    headerMode="none">
        <stackRoutes.Screen
        
            name="Login"
            component={Login}
        />
         <stackRoutes.Screen
            name="cadastro"
            component={cadastro}
        />   
        <stackRoutes.Screen
            name="Home"
            component={Home}
        />   
        <stackRoutes.Screen
            name="Agendamento"
            component={Agendamento}
        />   
        <stackRoutes.Screen
            name="MeusAgendamentos"
            component={MeusAgendamentos}
        />   
        <stackRoutes.Screen
            name="HomeAdmin"
            component={HomeAdmin}
        />   
        <stackRoutes.Screen
            name="DashboardAdmin"
            component={DashboardAdmin}
        />   
       

    </stackRoutes.Navigator>
)

export default AppRoutes;