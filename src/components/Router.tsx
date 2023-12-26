import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ArtistType, ArtistsList } from "../pages/ArtistsList/ArtistsList"
import { ArtistPage } from "../pages/ArtistPage/ArtistPage"
import { CreateGroupPage } from "../pages/CreateGroupPage/CreateGroupPage"

export const MyRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArtistsList />}/>
        <Route path="/boy-groups" element={<ArtistsList artistType={ArtistType.male} />}/>
        <Route path="/girl-groups" element={<ArtistsList artistType={ArtistType.female} />}/>
        <Route path="/co-ed-groups" element={<ArtistsList artistType={ArtistType.co_ed} />}/>
        <Route path="/groups/:id" element={<ArtistPage />} />
        <Route path="/create" element={<CreateGroupPage />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  )
}
