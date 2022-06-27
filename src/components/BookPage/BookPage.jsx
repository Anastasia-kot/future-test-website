import styles from './BookPage.module.css';
import React from 'react';
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapArrayToStringWithSeparator } from '../../Helpers/mappers.js';




const BookPage = (props) =>{

let URLbookId = useParams().id;
  // eslint-disable-next-line no-lone-blocks
  { if (!URLbookId || !props.books[URLbookId]) { return <Navigate replace to={'/'} /> } }

   let book = props.books[URLbookId]; 

return ( <div className={styles.bookPageWrapper}>
  
<div className={styles.bookCoverWrapper}>
        <img className={styles.bookCover} alt='Book cover'
          src={book.imageLinks.thumbnail
            ? book.imageLinks.thumbnail
            : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFRUXGBcaFxcYGRgaGBgXFRgXFxgXGBUYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAPFy0dFR0tLy0tLS0rLS0tLS0tLi4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQAAxQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAABAgYAAwUEB//EAFIQAAIBAgIFBQkKCQkJAAAAAAABAgMRBCEFBxIxUQYTQWFxFCIkc4GRsbPwFjI0VHSUobLR0iMzQlJTg4STwRUlRGNkZXLi8Rc1RWJ1oqPC4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAJREBAAIABQUBAAMBAAAAAAAAAAERAiExQYFRYaHR8BKRseEy/9oADAMBAAIRAxEAPwD9OjEZDYiGV92aPz7kXo6riadWrUxeLyrVIRjCs4pKHar/AJXHoPBEXb2S/Q4XQ20Tj5Lp7sXjf38vsElyNg83i9IeTFVF6C0ilA49RM+42C/pmP8AnVQSXIyn04vSHzqqKgU9jWJb3EU/jeP+dVTS5EU/jeP+d1PtLUGapaBclXyFpfGsc/2qoK+Q9H4zj+zuqoMjNWpnSJIe4Kh04jHfOqgz5BUP0+Nf7VV+0ZGauuLclPcBhv02Mfbiav2jPkDhPzsV85r/AHiZCpkxW1xJWXIPCr8rFL9prfeElyGw/wCfi/nNa31gKvnELtriS3uEwv5+Kv8AKa33hfcJhN7eJf7TX+8TJc1YqiMqq4okfcFhOOI+cVvvBernAS3wrS7a9Z/+5cuv38isqVVx8hzhWje9+olXqy0fu5up++q/eOa1b6PjJLmp77q9aq15nKz3IZdfH+ma0WIjxR0hUTzRGS1Z6NcnN0p7Undvnqqbb3t2l1i6p1bR8Vwq115qshWV2lrZoxzQSK5Yufe+VEpquvzGJXDGYn65U4v3rJHVdLvMarbsfiV9MWXDvwk7LfZ6Q3uMmnuDslRzkgJIcDTCkQyiK2MmQCwXEzZkVAaQbDAeQoBGaNtZ8Pb/AOhtfIAWFcR4xsFoDhJCo+iwqiSltxULneEEkLufshpTQosZQyOFuJ3cjjPIEDCNms8iO1VrwBeOr+tkWlOPpRFarPgC8diF/wCWRY0N1ojCqRjKuWIfesktVvvcf8vxPpiV1dd6yS1W+9x7/t+I9MS4d0nZabPA6RnfoFAuoqHlIF7iWfAdMoVQAuB0SC0QKEFhUwOm0YS4yj0gLJGS3AnHrt1jRAKYdoO8KRRzbEOzRzZBxqb0830ey8w7hncWbOl2BhZMZsBFLBu/ly+gjdV2WBT/AK7Edl+dlvLRNXXaRuqpeALx2I9bIsaT91N1ekE5SppGINVzi31Erqzg1DG9N8fifokkezg5Si+a3x2W1ffFK2XZmeRquv8Azin0aQxFuxuL/iME3EyuOKlZxpu2YyhYa4LGmCtA5vidGK0SlBs1xVEKiVAktwr6hxHTSIoxHTOSTHYDSSEgG46YAuFAk+wKQBOFV+2//Q7tCgfM1mmFSQ9SKYYxQVzcr9Jr8QyRtkgEFdpdBI6qvgC8dX9bNFhHeu0kdVcfAI+NxHrpljT7uTqrXcwzMQfFhsHsbUnLabVt1re1yd1bTu9I/wDUMR6IHr6QxUnOcYzcVHoss3bO/S1meFqrneOPfHH135bQuTBMZxC4rymV2kECMpG2GbZmgoUDWFG2TSgyKS3AdoWw9wFkjbzSFQDWHigIZWCFDvGjESWRRgoXeFEUs1kcvb2sdXE51I/6ktWbRmKLcza0aO9Z9KJTVU/AF42v66oVaTy8hK6rF4BHxlf11Q1Gn3dJVrMCUWYD58bg4TTcoptbn0+dZkrq0ppLSCjuWPxHohw4bvIWNb3r7GSmrpd9pFL4/W+mFNvyiNydlcjoTfK/lN3IqdOnBVcTXmoUabdk22k5za3QV1237Wvrwmhp7KeIxNarUe9wm6VNN9EKdJrveG02+s1SPYchXL29uxnj4ypUwq53blUoL8bGbTnTj+khPfKMd8oyu7XaeWzL7a2laUasKG03UmnJRjGUnsXttycU1CF8tp2VyD69qzCqhzjd7+v0mVMDrKXYCNVcUKoLc0mOuqwDSV8xLcEOBAaHEYG7MewQ0RJQW4LOcplA2UZAbDFkVgSGsKQK4IXZHkc0yUpo9GVtxKarH4BHxlb11Qq471nkSWqt+AR8ZX9dULGn3cWOzcJkYqOFRZPsZJ6uvfaR+X1er8imVklk+xkpq7neWkOi2Oq/VpkjclN42q6nKelGW6lT71dGVCdT0zfmP06rU3ZpNtJXv2tdtkz8+5eYCeGx+G0vCLnTp2hiFHNxhaUecss2tmbT/wAK4l7TxEakYypyUoTjdSi0009zTW81OzU7O8oJ5PNPJp8D815CYhy0hiFNtqGEwkVJv8lQg023x2r+UudMYxxiqNL8fVTVNb9hPJ1ZrohHf0XdorNojeTmiaK01jqbpxlGlQwqpqS2tnZo0op2eV7ZX6xGkkP0ZPK5k+B4FGvDDvFqlFOEHS2KayisTVVnSit0NpyoOysr1W+lni8mKtTBaQq4CvUdSOIviKFSXTUf4+C6FmnJRW5LrFM0uHVStdpN7ru1+y+8MkQnIGDxP8oTxdONSo8VOm+chGVqcYx2aSUl7xXeW7NvpPTqSh3M03UqbFecMLKEvwrkm1BU5v8ANe3Ft3WxB7V43umClOqibaTV1vs812oLqLK7Svuu1m+CPyrQ9PErSGkucmpWWFeJ5iMo1Jw5p35lpuUbb2l3zSajZ2PW1iqOxopUObUO7MPzNlemlbvGlFq8d2StkWlp+hRNGSbaTzW9cO1dBLUqmxh8Q5SlDFJwjiaja2oxckudpvdGioSnOFso99fvlM8jWtonD0tHXp0acJRq0lGUYpS76a2u+3yvvd73ebzFJT9CZzYyYrMoSE03a6bW9cO1dA8EfmGEjU/lHSsouXNKph+fVO6rSp83K+xJZpLe0u+aTUWnk/T0lG2lsB3NGk0sJV2FtbFPY3LZcIyys8rItNUvnESx+S6ec3X046kYqXclC8YSco+9jmpOMXkknuPV5atLRWBjkr1MEkr7+9z7R+Sn6HKSTSurvcul+QVxPz7lJSrY/FVsLhaMKMITh3TjZRjt7cFGahRlba2orZd75f8AKrOX2YCX8+4n5HS8vfxz9uBmYWlpfNZcCR1U/AI+Mr+uqHHkA08TpJpp+FvNZrJfad9Vdu4Fb9JX8/PVOsRl4/qUlZpmOUZGAWbyfYSermV5aR+XVfL3sCsmsn2Mk9XMFtaR+XVPqUxBKtmrux58eTGHjnCEqV221Rq1qMW3vbjRnFN+Q9JhjU6y2jlg8DTpX5uCjf3zWcpNZXlN5yfW2z562gcNOpKs6UedkkpVY3jUaSSS5yDUrWilv6D7E8xlIWOVDR1KCjGNOMVCTlFJZKT2ry65Pak78XfeLi9G0asqc6lKE50m5U5SWcG2m3F9G5eY+lMOTA+GvoejUk5uFnK224ynDbtkttQklUyy76+WR17ippxtBLYi4wsktmL2bxityXerzH1JGsB8eH0bShUnVjTjGpU2ecml309lWjtPpsJV0PQkoKVGDVOpzlNNZQqXctuPB3bflPvYUB888NBy2nFOWy43fTBtNxfFZbn/ABPNr8msJOKjOhCcVbZjK8owt+ZGTaguqNj2JQFUOsBoozCohSCPhoYClCpUqwpxjOpZ1JJWc9lWi5PptewlPRFBThUjSgpwUlCVs4qbcpRT6E3J5dZ6VkFxC28+WiaG1UqOlBzrRUKrcU3UglsqM7++Vlaz6D4lycwmyoPDwcY22VK8tnZ96ouTbjFcFZHtuIVTGZbzMXoKhUlKU6d9r36UpKNTJR/C04tRq5JLvk8lY543QlGpUVWVNOajsqSunsXvsNxa2oXz2XdHtWF2SURLy9H6Lo0HJ0qUKe205bCSu1km0iZ1VTtgF4yv66oXVldEJqs+Arxlf11Qu3Psu5VlWDbvdrzfYA6qJiFQabyZHavpLa0h8tq/VgV89z7CM1cyvLSL/t1X6sCdVWSfaFZi3CmyKKOjRz2TpBGkk2zkKM2K7BDxGEihijXCpMBrBAbFRmjJKwU6YJo0QpgGwUYVBHVMNznJ5CuRQ8mLNsRVLnKrO5A/OO6I/VWvAV4yt66oWNJ7iO1Xzvgl4yt9FaoJ059rGqwaALcxFLPcyJ1cwtLSPT4dV+lRZb1Fk+wjuQK7/Hq9/DKm7rUXYnVVcojwXAyGgyQDsjQRrhRplkhWh2In0FBQ8RLBiB0sADkBIIzFaGaD5ApEFMEkZAPcZM5DJhBbEbOljnshSN9BmsusLjxNsgNT3rtPzvkDpB08JBJJ3nWvfx1RdB+i096Py/kXTbwcJdG3XT6vw9T7DOP/AJ59tYM8SzpaY4x8z+0x50KXVfyGOdy7fnCpqs8n2Mj9XUnfH/LavoRZTpZZEdq799j/AJbU+iMDq4LJXNFGk+kyl5iDpcKYm0h0VBF2Q2NcAowLjKRQTICM2EBsKQrYFMKeSEcOk6NgkAgyFMgHYgN4VEDILC7AkgNT3rtIfVtTTwUU9zlW9dU4FrHeu0j9W9u44dtX11Qk6c+1jV6dfDqMmldfQE9e3tkYx+XT9uknkR/ILfjs/wCm1vRArGiX5DQ2XjevF1X51E0wqHdgSGTGZKLKdIz4CtBi+JqkdEwOdhlI1ghQphaMigxZm0a4smEaQIs20FRuFMCSyDYARzQyCYKCHQLG3hGsZRCkZlAW9dpG6vF4HDtqetmWUVmiO1ex8Eh+s9bMzi059tRqqQnN1EsjGbaoZSyZJavptyx975Yyol2bMPMVNR5MlNX088d0N4yrx4Rz6siosb+cDkBRDb24FDwkK6nA2yBII7030jXFhG49io1xGOAA2ElwuFoWKAzRh0K94DX4g2hG8zpsgCwrM0w2AZDXOdxrhDNmETM6nUUdYLNEVq8+CU/1nrZlartryEfq8+CQ7avm56oZxac+1w6qSpQ4e1+0x1b6zGabsaiyJPV8s8f8sqfViVk3kSvIGe13Z1Yuqn5LNdHX1lRXJIxzUd9+I8ioCz3BaNFHQBUdU0cVIJUdUZyFSDYqCmgbQlRXQG/MRT3FuNc0YgBIJmhQOorFuCTAwGzRQziUBoIYo0gjU1miN1ex8Eh0Z1fXTLCjK9iP1evwSn+s9bMzi059tYdVXzaMKpdQDKg2Surt/DevGVvo2UVuyR2ribccbf47X9KNQLGa4nSByc8rMam2mCXSQJXsO5HCpUCHTDGRxTBcWU+lMJxTHUhZQ7e9DbIgVu6SoyQbgBcWp2hWgbYXIWjNGfACl1mbuLVo9QyflEUuOYbkHRG2hTNFQ0l58iL5AZYWn+s9bMs6cs0RvIJeCU/1nrZkxacrGqi2jD04GMtPtcT845MaWhhJ4unOlXblia1ROFNyTjJ2Wbt+b9KP0k4LCR4stzGyJivyxpWs6GLf+GhKX0xbSztvFhyzppuHMYvq/ASt5He3QVMcLHrG7lj1i56eTlKT5b01k8PjfJh5vovvQnu1pOyWGxqb6XhqlkVbwS6/ObuWPX5xx5TlKS5aUk7PD419aw1W3oDDlrQb/E4xduGqr+BVxwseD87C8OvZsceV5SD5cUeihjuvwWqb3c0Ur9z475tUv0ebeV7w0eHpA8NHh6S8eU5Sfu+o/Fsd82qBesCj8Vx3zaoVccLHgFYaPAceTlJy5fUujC4/5tP7QPl5C3wLSL/ZpfaV3c0eAkqSfQSZ7EQj58vYfEdI/NpfaJ/tAj0YDSL/AGZ/eLmnRjwQzox/NReBCPl//d2kX2Yf/MGWsDL/AHdpF/qP8xbqkl0LzGVNcF5i3HQQq1g/3bpL9x/HasH3ftW/m3SX7hfeLl0lw9BlFcBcdERMdYX92aS/cL7wVy9b/wCHaRXbRVn/AN2W8tHBcEK4LghfYpHw5cSby0bpBNf1UUn1e/8Aa59XInDyjh4xnFxlerk007SqzknsvNXTTz4lMszGZzWHHm2A7xkYiv/Z'
          } />
</div>



<div className={styles.bookInfoWrapper}>
        <div className={styles.bookCategory}>
      { (book.categories?.length > 0 )
          ? mapArrayToStringWithSeparator(book.categories, '/') 
          : ''
        }
        </div>

        <div className={styles.bookTitle}>
          {(book.authors?.length > 0)
          ? mapArrayToStringWithSeparator(book.authors, ', ')
          : ''}

          {book.title ? book.title : ''}
        </div>

        <div className={styles.bookPublisher}>
          {book.publisher ? book.publisher : ''}
        </div>

        <div className={styles.bookDescription}>
         {book.description ? book.description : ''}
        </div>      
</div>

</div>);

}

const mapStateToProps = (state) => ({
  books: state.appPage.books,
});



export default connect(mapStateToProps, {})(BookPage);
