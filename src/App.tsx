import './App.css'
import { Admin, AdminEditReference, AdminLogin, AdminNewApu, AdminNewProject, AdminNewReference, AdminNewSupplie, AdminNewTipology, AdminSpaceInfo, AdminSpaceSelector, AdminTipology, EditProject, EditSpace, EditTypology, SummaryNewProject, } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoutes } from './ProtectedRoutes'
import { AuthProvider, NewProjectProvider } from './context'
import { AdminBudgets, AdminBudgetsApus, AdminBudgetsSupplies, AdminProjects } from './components'
import { LoadingProvider } from './context/LoadingContext'
import { NewApuProvider } from './context/NewApuContext'

function App() {

  return (
    <LoadingProvider>
      <AuthProvider>
        <NewProjectProvider>
          <NewApuProvider>
            <BrowserRouter>
              <Routes>
                {/* <Route path='/login' element={<Login />} /> */}
                <Route path='/' element={<AdminLogin />} />
                {/* <Route path='/register' element={<Register />} /> */}
                <Route element={<ProtectedRoutes />}>
                  <Route path='/admin' element={<Admin />}>
                    <Route path='projects' element={<AdminProjects />} />
                    <Route path='budgets' element={<AdminBudgets />}>
                      <Route path='apus' element={<AdminBudgetsApus />} />
                      <Route path='referencias' element={<AdminBudgetsApus />} />
                      <Route path='insumos' element={<AdminBudgetsSupplies />} />
                    </Route>
                  </Route>
                  <Route path='/admin/projects/new-project' element={<AdminNewProject />} />
                  <Route path='/admin/projects/edit-project' element={<EditProject />} />
                  <Route path='/new-project/tipology' element={<AdminTipology />} />
                  <Route path='/new-project/tipology/new-tipology' element={<AdminNewTipology />} />
                  <Route path='/tipology/edit-typology' element={<EditTypology />} />
                  <Route path='/new-project/space-selector' element={<AdminSpaceSelector />} />
                  <Route path='/new-project/space-selector/space-info' element={<AdminSpaceInfo />} />
                  <Route path='/new-project/summary' element={<SummaryNewProject />} />
                  <Route path='/project/typology/space/edit' element={<EditSpace />} />
                  <Route path='/admin/budgets/apus/new-apu' element={<AdminNewApu />} />
                  <Route path='/admin/budgets/apus/new-reference' element={<AdminNewReference />} />
                  <Route path='/admin/budgets/referencias/edit' element={<AdminEditReference />} />
                  <Route path='/admin/budgets/apus/new-supplie' element={<AdminNewSupplie />} />
                  
                </Route>
              </Routes>
            </BrowserRouter>
          </NewApuProvider>
        </NewProjectProvider>
      </AuthProvider>
    </LoadingProvider>
  )
}

export default App
