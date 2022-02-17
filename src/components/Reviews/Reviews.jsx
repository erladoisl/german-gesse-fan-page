import Review from "./Review/Review";
import c from './Reviews.module.css'

const Reviews = () => {
    return (
        <div className="bg-dark text-white">
            <h3 className={c.center}>All reviews:</h3>
            <Review message='"Степной волк" Гессе был первой книгой, которую я пять лет назад добавила в список "хочу прочитать" на этом сайте и которая сегодня подтвердила немудрёную истину: "всему своё время, и время всякой вещи под небом" (Екклезиаст 3.1). И не надо это время упускать.\
                                  Второй цитатой я сейчас существенно снижу градус пафоса, но не привести её просто не могу, потому что это квинтэссенция образа главного героя, который Гессе распылил, размазал по трём сотням страниц:\
                                  "Почему, черт побери, каждый мужчина, гордо именующий себя волком-одиночкой, на поверку оказывается сусликом-социопатом?" (с), bashorg\
                                  Впрочем, двойка книге поставлена отнюдь не за это. Мало ли мне встречалось книг с несимпатичными героями. Напротив, с каждым годом всё сложнее становится себя с кем-то идентифицировать. Но мы вообще не совпали с Гессе, не совпали в ключевых моментах.\
                                  Первое, что бросается в глаза - это плохая стыковка художественного романа и попытки пофилософствовать, в результате чего теряется целостность. Сюжетная часть и (псевдо-)философское наполнение играют не в унисон, а скорее диссонируют друг с другом. По сути эта книга является личной исповедью Гессе, книгой о нём и для него. И как фрагмент дневника, как попытка разобраться в себе она, несомненно, хороша, но только не как художественное произведение или философский трактат. Для первого здесь слишком мало сложности, многоуровневости, а для второго - слишком много сумбура. Если сравнивать с потоком сознания Вулф, Джойса, Кортасара, то эта книга слишком простая, пошлая и примитивная. Всё, что там оставалось со знаком вопроса, здесь подано "в лоб" и лежит на поверхности. Готовые идеи, кушать подано, сэр! Я не хочу, чтобы мне разжёвывали смысл и превращали его в легкоусвояемую кашицу: в каждой личности сосуществует много личностей, война - это плохо, мещанство - это противно и т.д. Слишком просто, слишком скучно.'
                name='Артем'
                stars='3'
                title='Степной волк'
                ava_url='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRYWFhYYGBgaHBwYGhwZHBocHBgaGhkaHBocGhocIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhISE0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0MT80Mf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgABBwj/xAA6EAABAwIDBQUIAgIBBAMAAAABAAIRAyEEMUEFElFhcYGRobHwBhMUIjLB0eFCUgfxYhVygsIjM5L/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAhEQADAQACAgMBAQEAAAAAAAAAAQIRITEDEiJBURMEcf/aAAwDAQACEQMRAD8AHLl2+vKhAKuwtHfMBcfqSSBnVFzJKdO2FaQh37Ne28SFvVo3qQYz5VfDWML3mGjUqvGvFKkXusB4rDbT2+6oC2SRkGjIfvmmmGwqR7tX2s3Ru0obxcc+waLK1dpPfJuZJudTF/AeCCc0kgkEt8469i9YQREHMm06A6cVdSp6HSCnk5EW0m0z9Juq98/zE/xichy81WxwN+Q6c7d11c2nYkG3HvjysmGwjuPad6TI1b3TPC/iuIdoOIBiBJEa8vAo7CUzd29uyOxw1HA2U6dKXhoJJJbA4uiMuOSGhSAKZLbTz/3ZWUnvkwZkAWvzjuHgU3oYZr37okSDlmPqz5Wib5KFTZcBzt4ExkDcAQL2yzC2m9QOm94zJadJBAjQ9LJvgNq2l7rjJzSLTx1/2lppxBIM20MAGZFzAF+Sqcfl+Yt3ZBFiHHtA6a5hB4zYa2jVL4+cnobdyeUaG4y5kn1dfNcNtBzHANJA6/n8LUbL2yHjdmHDic+ilUv6J1qXA5exVtzzRmGAIuhcW0NNlzUya4JASrmNhU4YyrajlGtGSPS9Ta2UHMuTGgxDMRj1tFWimrWNU3CEG9CwYuhA4qoEZWBMpXjKJhPM7yB6UfEc1yC92V6qeptYU7BkrSez2zgAEjNUtTXZu1g3Oy6VchnDVvwghC4+kxlNznWABJPRBjbIOqxvt37Ukt9xTJ/5keSeaVPENpj/AGg2u+s91vlkhjbmBxjikzGbsWJdwKtuASDc3nVUhhIgm97eHYqmwi97nAkm8x+Ua5wO7/Im1tCIuBrYcFXTtadJ5ExwEC5RVLDEiTcnMc50twStjqSTKe98kZ8zYkcOZ0jVesw5DXbsxEnhllftGqPw9DN0RvQMyLXy43juVrMK4y2bZzqM7JXRRSL6EhosCJmNbHqrnVmbzPkMyczY/TAHOx8Fe/DEDdAsIztc+YVIw8zYT22kGDyzWTC5wK3msc5vAxJF23nQ5xYq73oNnAwR8sanWZF5gwEPg6M7xcHE5am4kA6WKtYx5B3mzG7ecr3jzW02EiyQ0OgTwtpqleKoltiSM8jI0stB7kOMEABvDPOM9c8kLi9nhzgTDWwMumUWvkgmZzqM7UZfIRJ0z0HiV4x72XAEzrB7g5OGYAyYIgaTrbTiiXbGdG9F+mSbcF9NJbL22SGsc75rX+yd0HF5usRi8NUpEXgAyBoOd1v/AGZioxr9SL9dVC5XaIVOMZ4fCgBD4thlaShhRCEx2FChUmZnabbo+m9VPZBUmOUK0DDGVQpufKAcVZRelkUKYxC41lkwYQhMdcFUmsYyYk3eS5Wbq5W0wqq42VdhJel+Fo7xWiwGEghUXi0VI8r4csY585AnuXzavVLnlzrkmZX0b2wqlmGIj6iGz4r5uxtuvyj7nzV/HHqh5RB43rDLXirGsG9vRAH8cyYzBtbJVUiZN46d0fZHYdhuQTx7eZ9ZJ2yiRLCYUvIJbaTHTnwiQtFhtnCwi2Zi09oVeyqQAnUnM5nmnTHdinVF4gg3Bi1gYy4RyU3YcZwrxUleb/FI2VSQOcK0zZSGBAvHgr2Dun9I/C057/Q6pUO0sAmYC8/bMfZWfDRaI42tlfT1KaGmLZc/JWnDymF4Ysw2CYBMZ36Z5LsZsr3gjLpa2qdYfCgfr7oncbw5Ii8GXw+wizKPXL1CNGEAmYPDTrZOXNbz43QeIQbY0yjO7V2U17S05/xPA+pSz2MrFj30XWIMgeceteS1VVgKzePpe6xDKgFnHd77ecdyVc6ifnjZ03OFxQUsU8ELPMxBBRjcVIXLVPo4NOfTkrvhwraaI3LLIZCmsyEG9x0TbEUksfSut6oFIso4hyIc3eCppMhXOqQla5Fwr+GauVXvVyfkbgR4JlwtXgMNICzeCpmRZbDZtN0L0EaTFf5FqEe6pzY7ziPAHzWNcz6YjL8X75Wp/wAgOnFBk3axo75cs0GAhxtpE9T3p2UlFDaURpxm2engjcM3KNeVvX4XMYDvb2emgHMonDADT1wU6ZWUNaL4hGsqSlbHW6I2k6bH9qTZ0T0GCrK7e59yHE69i4k6lYZBVN2c6/70RuCaOM21JgflKO0omlUg6ka8PV0o4+plo1uNT1Fx4qxjxf1KVUcREzr5QrqeIBtHPLTmjoMGra4t5SVJtYWP777Jcyq0aBWtr8AFtN6jJ2KgCxiL2PHxQhfM/dVDFXF7g37OK74gOJmJ8bc0HQynDnuHelO2aAfTM5i4RpfvOjn+1TjR8pEWghCXyDyT8QDBV99jXaxB6ixTHDCVntiO+Ut4OPiSfutVgKeSl5J+TPIzlovotKJa9WNpKL2wkXASL22S7EU9UyCprsELIYUOqQq3VF5iWQTCFL4RSEYSuQfxK9RwPAz2VhzYwtZgTGiDwdAABN6DBC70OkfGvberv4+sQLN3W9SGgeuiSMPZIPnKYe0pJxmIk5vdzsDYctEtpPkGeEd/+kzGQcXAEkRrmMldTEZDyVLCHT393PvnorKNaLDOM1JlpCWvBtF/JEUHRr+UMIP3VrWpGVkYBeGCh2PIzCm26UoFUmTp4q33B/t3CPNQoU8tUxoAH14rDIqDDGZ04Dhy5KQZlM98eGiPp4VjhqDyiNeIveV67AnQ+HRHDaganTaf7A/9xVzKAGU+B+y9o0hIkxe/y/kpg6nY3Pd1t+1sNuALKYIynW9vJe+6HDz/ACjmbka9QfCJVD49FKxkwWzTll59UNWvPUoh4JJ6Kt7LZJTV0INkM+v/ALj9lrtmRAWa2eyHVrR83mmuFxW6h5OzyL4tmnMJfiqsKkY+yAxGILipg0Op117UqIGmUUxkrYFCzFG6WV3LRYrCghKn4W6fANCveK5HfDhcsA3lMACUpHtpQFT3e64iYLxETyGqJ9p3mlhnumCYaOpP4lfIGPIfvjiuunjw7PF4051hHtS5pxmIcySxzpaTaZaCfGUvGVtfwZTDEsD75zkeHVLw2JB9epTTWgqPV8F+GeIIJ5jnNv2jKbLSUuos+YD1om7RoUtjQW0AMskS1saW1/SCLY7PUq5mLsJPU8VMpowoDSx81Y5lO14KTu2j6/aW47ackBunUyipZnaRr6VFuj1BrnhxANuP+lkGbXP9r8DIj19kZgNuhv1OAus5Zp8qNjhq5sOXHzTOniREG45G3OeKyTdrscLFSZjjGdkj1FU0zSVaouWtLjnyHGwVvxBgSTHYM9OKQjEnckE28tVa7EyLlbRho+sZsBy5dVBzyTxSirtFrGlziABmgR7TMhwbmLieCylvoSvJM9mrpOkSpvpAiyxTfaBwOcRNh+sxKY7O9orgOEtOZ4dmaLhi/wBEwlzCHvjUjvgflcGOR9RwMX+qD538h2K+mwEoNJnB5V82L2Bys3UzdREJfWCnU4ITw1ym1JtkrwgTWmUPUKPKrUvrU7Ji8pZja0AppQQbdXIT4grkcAaz22pe8wro/i4O7Mv/AGXyz3YaPBfZsVQ32Ob/AGaR3hfHcfYEcyrV2d3gr4tfgC6uxjs81ZWpbwDxrnzQb6G8ZOQT3D4eKTAbRfvmB3QtPDDa1AFKiCZ9SM0VpdRoNib287/tTcAUaesErEeObItf1khRTOV+Sl84MgTx/KlUc7Mbo5km3ZEhJoSDsINf9KbKDRYxHEx90uxrMQT9duXqUv8A+mVH/U4k9/3TJb9iN50h9iNnUSPrYD1ak9fZzAfle09CPsq27BecnN6EQctM1e7Yz2tG6Pm13nWPS1k2Z9i8vtFVOkW62TKjiCQAEtZRqNsQR4g8p0KP2dRPyk8fBJQ8D7Ah+k5R1lVYqo5kiDHPRajZuGaQIGnr1zSP2kw5BAbYzqkT5LPcMrtB+99ToHMwhcJ7gH56niY8ERU2U9zpLmk//oAeF1fhPZfeiXu4WCsszs56VN9DTBVsLEB7OFyPvqjn7NDhLeyISt3smyd1zy3dEfxB45DNNdg7PfTcWMeXU9C8XngOQSNpdMdS32h/hsIW0WSZe2zjwkC3gp0XwVbhgWh7SZ7/AL3lcygSUjZy+ecsMY6yBxTLppSoWVFahdGuUIC4JqPcYUMPQhEvpWSpGXQA+ok+PJTupRKErYLeTJGEF1ybfAr1bDerN2BZfMPanZ4ZXew2a877DwJvHmOxfTcMZWc9uNmB7GPImPlPLUfdVpcHR4qyv+nzluBe2HOHyBwvxTR4+U80S+m0U9x07otxPqUvoNG5uAkiTBOfFTT5Omuipgt4QoFufguY6Dy66jNWPbmiyaBnPIyElSZSe7+IHU/hX0WZSj6VIDmfVuqVsdLRbWwL3i4b2Zj/AMjYIN2GezVxHNjvNatjLxr3q0YeYWTG9DKUqz7QQOgJPgFazCvfc5c7T2BacYIaRCiaGg/1dbRlIhdgwLEzzPqy9Zh4IsmVSgA6ZzXraY4/dK+QqUhzsqIGmh5IbbWEl0kCFDAOcDCb12FzL3+yw2GTrbKDhwPK3D9oAbIrgnceCOZ/S1QZuujwRNJgN8rnt/CKYrkytDA1gRvtdu6lkHxmR3LV4RjAxoZoMnZzyOqObhbaTryQtekLaHTmtSw0pMtY+XXGh8OatY26AZVO8DnAMq2nibrbwcX+pZSGbGKD6d11OsIXe8CDrgh9F9CmiHMEKik8IgOQ0GgdSmoMpyi3kLxoATywoC9zyXIveC5PoQzCOuisfRD6T2lu9LTA5gSI7YS2i+CmdKuqBTPlGIc4w0DPPkhA0MJi8Hx9Bb7afsu2o8vpv3N4yREi+cCRCy/tFscYbca1znb0lxOp5AZDJScvdOr+k0kl2IXtuSLa9Oamw28/sovJsfVl6PpjNZhJtciqVTwj0Ev347FYa0JWGWOKT4zi2v6R9F4gH7ySs7TxCPw1bIoF55Q8c1v8u5L9oYwMYeKia1kkx7y+ToFuzN4RwAe87xdnkEzaN1wlK9k4oNaAdLJpiMU0gEcUWBDnCuFk7rsAYHDXMLHYXFhOsNj5bCGpDYLtubzQKjP42cOXHpl3qOz9rBzRa+kfdHY2s0McHatIjjII+6x1Nxpu5HL8ILlcGbx4bT4wkGCIHXvXrsRvATdJMPiyQi2P5oPQ6hhhrvA5HyKm+nBQ+znzUJ4Apg+FSc9Tz/8AQ06K6blJ9WF0IbEvshSRF9Hvx0K+ntIlIapPFXYYqeE9NJTxEoljpSzDOTOhCyfIyJbi5W74XipoeC9lGUZQwpKoZVR9CsrhR6zCwsl/kDC//Ex/9XQejh+QFtd9Yv232/Rax+HPzPIE8GZHvWfKGnvg+dvZOchQpuzGU/ZXOyVOR55KR1EXHPiqHvOdkQ4ZX1Q9UEOFuqBi+iUwovhL6XFRx+I3QBxQa0dViD6+MBsO0/ZU4l7dwx4JScTaEVQrhwsDlzTKcB/TRO9lS5aY5QPJUNxtdhu6RwIEeCfVGNLuEhDvwLTkcyPFNqJvfpnuA2wHZ/KdQT9+Cd4faoGUuOQjKeZNgFnKWBDXl0za08bAJrgjnOuXriEKlDTddB7MQ95Jdr4IfaLAWx6HgvTXAi3EEcTGvFVuqNIMzrqhg3twVbNxRyOYz/ITqnWlIajIe1w/kPsm+FYbk2S0gzTY62U0kuPRO6GFKq9ncJLC6PqPl+5Wip4aAmnhHJa2mJKmGQNfCyFp61BCHDrPBMMXiKZBXuHzWpxWzQRMJO7CBpSVJNzyXUSrviIUN2ypcwpfXQl/xRXIXdK5H1BhsmUwptYQhKFaUwY4QuhMbsi+uWMe833QTHE6L4j7QVnPqvcTckk96+140/I4aRdfEttsh7xwcUzKyuCeGqyxpPC/Zb7KZNpQWzKliDofMD7o59wpPssuiDXKGIFwua7Ne1XyOaDG+iI4qG0KctB4fdRLlL34IIKBt4wTim7TxuiqTnt+psji0/YollHkrNxzTlbz6pnQFOclHxQ1Y/uMd4CnQxrMmxbQlGYdwdEHcdnb8JowtP8A9lNj+Jjs/CHBSZ0UMqMOefAEeaJo4tsEMaXHg0Tl0yRxw2HEH3LJ1lvrmjXVm7sNDWjkIFuHNBlFKEVam85ANJvfMc4CT08K9rzvOLw7jaDK1Td1xgGeJQGPpgFpAvPdzWVEqnkup4UfKTpe6KDsgBPLjKHpVLJrsGjvVQ530s+bt08b9iV8vkLamdN5szD7lNjNQ0A9Yv4yiy9LWYscV4/GDitqOL21hr6oUGpZ8WJzRuHqArJ8m0KcyQl2IwglNQoOYi2BoRuwsKTcOEyq0lQ8QEZMBe5HBcrN5cm4ASpOTTAMc6XHIW6lCbOwhffJgzPHkE9cwBoAEAaJ5RpkAxLbFfH/AGsobld/M7w7V9lcNF84/wAibPMNqAZGD0P7RZaTA4KpD3dibU6oIvJWbY/deSmlOrBlTpFZerA2sDeLKDHaLveBQedQt2Y55hUvdzzyEqxxkcx6KrBtkJGiBgnDHRFjK4zS/DAzMgHNNC2RbPqs0NLAsRQ1aYPrVA1q7x/KD1JPcE8FAGPXkvGYBpd8xHaFkwNfgk+Le62+bcyjsHSe6Lz3n9JvhtnU7yBOV4gZ8EzpYRomNO6M7jijT/DSn9gOHw5FpXYtkC9+/wBao3cgn7ZoTGmRr+jnZIuyj4QNQYSQ1tybADUlaijsosYADfU8T+Fd7L7I3WfEPafmkU+QyLup05Snj2AplP6c3lv2+KFNPDE5koLF03A2JWieyAlGKCFSsIORVTa6c07wL3BC06aJpuhTRpHlB8hEBK8PiEcyuCqDF26luPdmmJeEtxjZRwwo98Vys+FXIYLhtGgCGtEAZAZLx5XOzK8hXKIHhJParZ/vKD26lpjrp4p+4KvEU5aeiAT824+kWGeNu0K3DVZan/tXs/cfUZGTt4dDl4FZOhV3XlqXNQU8Y3ZUjp5KTavchmv7l6Sl6K9hcKFUKllaOiMY4OCICmlUujaNe/mgqtA5tzVJqkG8rYbcNCzEcoJ+/PT9rhWA9ZW6pO3FEq2jioz1tHBLgyob06vAi/fYznmiWYk5D1zHNJfiRHr7KdPFOlbBvYeHEw0mbnKe9A1i5w3jkI8eHiq6D3PMN772nM5+u9B1MSfelouyBHQ59qMyLVH2j2a2kyvRbDQ0AbpboIEQpYzDbjrfScuXJYn2L2j7upuE2d4FfTXMa9sESCn7WHNSx6Zuu+yR46pC1WJ2YJgOI4SJCR7S2HWglrQ/ob9xUqmhXuGdO04RWHxu8lONwT2uO8xzTwIIU8BSO8lwmm9NZhmyEcxsITZ7bQmJZAumSRZLg9a1U1VVWxgbZVsq7xRX4Dgs3Vyn7srxNgDRPz6qIQ2Fe7fex3J7elgR3gH/AMkXCcbopcFzgrXNUFgnzT/IeziHtqDJwg9R+iO5fIcaYfOUFfoH28w04fe/q4HsMj7hfHdt7G3mOqM/jJcOnooJ8jNagGmcoVp5IbAPlgRe6lY8vUVOPBRo4rdN/XRWvYqalOc1kwtDNmIBVh3Ss45z2H5T2FXt2gYnXgjgN/Rs+gNDCrdRcMoKWDaLuCtw76rz8thqYsFg8PoP90/gjMBhHPzsP2vMJg4jeJceeXdkndKwSuvwefHvZXtCs2jRedAM9STb7pXhAC9rgLFjT5oX2zxXyMZ/Y7x6Ny8T4I/YjN5rXf8AEDuJTSvjpO38vVfQ7wZLSCBkQfyvrWx6+/TaeS+ZYBl1v/ZskU4BDgCRwI68bLLsSl8RzUZKpY4fSbEafcIpD4igHDgRkeCoSTI1qLXCHAEcCJCXVNg4cmQzdP8AwNu7JWsqPaYJ8Fd8R/Zt+SVpPsb1BG7J3fpd32VOIpPAO8LJs185Arg88EvqvoBgtoVPmR+ynytNiMLSeIewHsv3hBDYTW3pugcHflb1x6DHpFcp/wDSX/3b3lepwH//2Q==' />
            <Review message='Это замечательно, что в такой маленькой книжечке содержатся все самые важные вопросы и ответы. Нет, я не скажу, что эта притча "заставляет задуматься" - эти слова пусты и бесмысленны. Скорее, Сиддхартха дает умиротворение и успокоение, убаюкивает, усыпляет. Усыпляет не скучностью, а своими мыслями. Читатель их чувствует, переживает, раздумывает... Прочитав эту притчу нельзя не согласиться с ее выводами. Эту книгу стоит читать и перечитывать не из-за ее сюжета, а из-за того покоя, которое она дает душе, не знания, а глубинного понимания, ощущения мира со всем живущим.\
                                 На самом деле удивительно, что такую в полном смысле слова восточную книгу, написал немец, и пока я не прочту другие его работы, думаю, так и не пойму, как же он до нее дошел, но притча чудесна. Только читать ее надо в соответствующем настроении, может даже в соответствующий момент жизни. Эту книгу нужно прожить, прочувствовать вместе с главным героем Сиддхартхой.\
                                 А еще хотелось бы сказать, что такие притчи не идут ни в какое сравнение с "Алхимиком" Коэльо. Нет, я не собираюсь поливать здесь его грязью. В свое время я прочитала эту его книгу и осталась очень довольна, она мне действительно пригодилась, не сказать, что открыла глаза, но в чем-то помогла, а "Сиддхартха" уровнем гораздо выше "Алхимика", его нужно читать в другом возрасте и с другими исканиями. И все-таки, как же книги одного "жанра" различаются между собой.'
                name='Миля'
                stars='5'
                title='Сиддхартха'
                ava_url='https://image.shutterstock.com/image-vector/person-nobody-man-social-icon-260nw-584562919.jpg' />
            <Review message='Закончив чтение короткого романа Гессе, второго уже за этот месяц, я осознал, что он очень близок ибсеновскому "Перу Гюнту", в обоих случаях перед нами предстает образ человека, ищущего себя. Я еще тогда, когда читал норвежца, обратил внимание на индуистские и буддистские мотивы в его произведении, а роман Гессе только укрепил то мое впечатление.\
                                 Под пером немецкого автора Сиддхартха Гаутама, более известный в мире как Будда, разделяется на две разные личности - самана Сиддхартху и Гаутаму Будду. Второй - есть познавший истину и распространяющий её, первый - не удовлетворяется никаким учением и постоянно находится в поисках истины. По сути - он все время ищет самого себя, тем же был занят и Пер Гюнт.\
                                 Очень важную роль играет в романе образ друга Сиддхартхи - Говинды, недаром он появляется рядом со своим товарищам в ключевые моменты. Говинда символизирует человека, принявшего чужое учение, потому и дожив до глубокой старости он так и не обрел мудрости, он по-прежнему находится в поиске, хотя и провел жизнь святого.\
                                 Сиддхартха искал себя везде, в том числе и в постели блудницы, и в конторе купца, успел познать участь отцовство, в отличие от друга он был далек от святости, но именно ему открылась мудрость, именно он обрел просветление. И в последнем разговоре он сообщает своему другу: "мудрость нельзя передать. Мудрость, которую мудрец пытается кому-то сообщить, всегда звучит как глупость".\
                                 В этой фразе ответ на вопрос - зачем Гессе разделил Сиддхартху Гаутаму на две личности. В том-то и дело, что научить просветлению нельзя, тот Будда, который учит, это не тот Сиддхартха, который созерцает течение реки. Настоящее истинное учение, ведущее к просветлению, строго индивидуально, человек может его создать только для себя, во всех остальных случаях это будет неработающая догма.\
                                 Гессе подчеркивает двойственность буддистской религии, она имеет внешнюю и внутреннюю стороны, внешняя - фасад, её символизирует Будда, внутренняя - въедливая ежедневная работа над собой, своего рода служение. В принципе, эта схема прослеживается во всех религиях в жизнеописаниях многих адептов.\
                                 И недаром у Гессе носителем настоящей мудрости является простой паромщик Васудева, он знает главную тайну жизни, всё - изменяется, но остается всё тем же. Так и человек может меняться, но он остается все тем же человеком. и просветление приходит к Сиддхартхе, когда он, следуя советам мудрого старика-паромщика, начинает слушать и наблюдать реку.\
                                 В последней сцене романа Говинда все же получает возможность принять непосредственное знание истины через контакт со своим святым другом, и все же, промелькнувшая перед его глазами истина в разных своих ипостасях, не обрела единства. Ему досталась только улыбка Будды, Сиддхартха и Будда слились в одно и Совершенный усмехался над тысячеликой бездной бытия...'
                name='Марта'
                stars='5'
                title='Сиддхартха'
                ava_url='https://facelab.org/People/images/smile/fasolt' />
        </div>
    );
}

export default Reviews 