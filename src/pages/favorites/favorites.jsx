import { useContext } from 'react'
import './favorites.css'
import { GlobalContext } from '../../context/context'

export default function Favorites()
{
  const {favoritesList} = useContext(GlobalContext)
  return(
    <div className='favorites-container'>
      {/* favoritsList에 무언가 담겨있지 않으면 담긴항목표시 */}
      
      {/* favoritsList에 무언가 담겨있으면 추가하라고 글을 표시 */}
      
      {
        favoritesList && favoritesList.length > 0 ? (
          favoritesList.map(()=>{
            return(
              <p>무언가 담겨있습니다</p>
            )
            })
        ) : 
        <div className='no-item-style'>
          <p>즐겨찾기에 추가된 항목이 없어요</p>
        </div>
      }
    </div>
  )
}