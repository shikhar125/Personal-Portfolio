import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import ProjectCard from './common/ProjectCard';

// Project data
const projects = [
  {
    id: 1,
    title: 'Real State Website ',
    description: 'A modern real estate website built with React, TypeScript, Tailwind CSS, and HTML. It offers seamless property browsing with advanced search and filtering..',
    fullDescription: 'A modern real estate website built with React, TypeScript, and Tailwind CSS. Features include property listings, advanced search filters, detailed property pages, and contact forms.',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Tailwind CSS', 'Typescript', 'HTML'],
    category: 'web',
    github: 'https://github.com/shikhar125',
    liveDemo: 'https://shikhar125.github.io/Dream-Home/',
    features: [
      'Responsive admin dashboard ',
      'Advanced filtering by price, type, location, and bedrooms.',
      'Otimized components, lazy loading for images and routes.',
      'Expereinces Sales Agents',
      ' Modular card, button, modal, and input componentst'
    ]
  },
  {
    id: 2,
    title: 'Weather Forecast App',
    description: 'A weather application that provides current conditions and 5-day forecasts for any location.',
    fullDescription: 'An intuitive weather application that allows users to check current weather conditions and forecasts for any location worldwide. The app features a clean and modern interface with animated weather icons and detailed weather information.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Weather API', 'CSS Animations', 'Geolocation'],
    category: 'web',
    github: 'https://github.com/shikhar125',
    liveDemo: 'https://shikhar125.github.io/Weather-Podcast/',
    features: [
      'Current weather conditions with detailed metrics',
      '5-day weather forecast with hourly breakdowns',
      'Location-based weather using geolocation',
      'Search for weather by city or coordinates',
      'Animated weather icons and transitions'
    ]
  },
  {
    id: 3,
    title: 'Student Registraion System',
    description: 'A productivity application for managing tasks, projects, and deadlines with team collaboration features.',
    fullDescription: 'A steamlined student registration system designed to simplify the enrollment process, It features student account cretion, course selection, and registraion tracking fot both students and administrators',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFhUVFhcYGBcYFxUXFRcdFxcXFhUZFRgYHyghGhslGxUVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGzUlHSYtLi0tLS0vLS0uLTUtMC0tLS0tLy0tLSstLS0tLS0tLS0rKy0tKy8tLS0tLzUtLS0tLf/AABEIAJsBRgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQQFBgMCBwj/xABCEAABAwIDBQQGBwYGAwEAAAABAAIDBBESITEFQVFhcQYTIoEyQnKRobEHFDNSYsHRI4KSsuHwNENTY4PCFXPxJP/EABoBAAMBAQEBAAAAAAAAAAAAAAABAwIEBQb/xAAxEQACAgEDAgQEBQQDAAAAAAAAAQIRAwQhMRJBEzJRYSJxgZEFI1LR8EKhsfEVweH/2gAMAwEAAhEDEQA/ANTdF0IXMe2F0IUyn2c92Z8I56+QTE2lyQ1Kp6B791hxP5BWtPQsZuueJ/LgpSaiSll9CJT7PY3O2I8T+QUtCFok23yJJNJAAkmkkMSEIQMEk0kAJCChAxJFNIoGCSaRQMEkykkAJJpIGJJNJAyFtPRvn+SgKftPRvn+SgJG1wCEISGIq07Y/wCGZ7bf5XKsKtO1/wDhme23+Vy0iWTlETZVTG0DHGHXAz1Iy4HJd9oQxEd5ERbe3QjmAdyrIPRb0HyXtKzfTvZN7UaU3U/JihKb2o9Gl6/kxQk5GcXA26hTu3PoR+075KCFO7cfZx+0fkhcCyeZFe3QdEIboOiFkqMKdT7Me7N3hHPX3K1p6VjPRGfHf712WlEjLL6Eeno2M0GfE5n+ikIQtEm7BCEIECEIQAkk0kDBJNJIYkIQgYJJpIASEIQMSRTSKBgkU0igYFJMpJACSaSBiSXiqnZGwySvaxg1c42HQcTyCxO1e3MkhMWz4zzmeBfqxpyb1dnyW4Y3LgxPLGJrNqC2EHmqyoNmmyoOxsD21cjZn946aIvLiSTiY9otc5nJ5Wpq6I2Nsx8R1RKPRKhOTyYZKPLToh002IcxqvMFY17nNbnh1O7yVXWvc1rgMicvfqvexmFl7jN1vIC61LHy0eRpfxWTcMeTnhvu/T68WXJVp2u/wzfaZ/K5VZVp2t/wrfaZ/KVJHt5OUVEHot6D5L2uVK8FosdAPkuqyVJnaf0aXr+TFEawnQE+Sl9p/Qpeo+TVGhmc03aSDyWmTx+UTmFpsQQeYI+anduPs4/bP8q8VO0DIwNeASDcOGXW4Xvtx9lH7Z/lKEZndqyuboOiEN0CFksapCEKhxghCEACEIQAIQhACSTSQMEk0khiQhCBgkmkgBIQhAxJFNJAwSKjw1rHuLWXdh9JzQSxp4OdpfkpBQKMlLhgUk7Kk2/2opqS7Xuxy7omZu/fOjPPPkhRbewSkorcuwPhrwHU7lktuduYYyY6Vv1iXS4uYWnqM3+WXNZnbG1KqrF6h4gp/wDSbkD7W9x9ryCrKaoc5wgoYXF7t4GKR3PkOZyHJdMMCW8jmnmb4O205JJXd7XzFx9WMHQcGtGTR08yveyqSrrT3NHDgjGRcPCxv/sk3HkM+q1Ox/o7jib9Z2rMANe6DjruD3jNx/Cz3lbbst2gpZi6npozG2Jt2twta0tvYloacsyMjY5qjlt8KIWYKGmdTVtOx5Bc17onEXsccZzF9xLQrraeOKXG0kB2fK+8EfHzUX6Q2d3Vd7wdBL/C5od8GOVvt6up4Y8VQ6zXEhrQLveRrgHK4zJAz1zUp25KldoMuLxcLSdNO0/cqtovZI1jw2zsRBA42y+adPTObm4EE6Aqmo+1sEbnPbFKWCzc3MDvFcg5XHqnK+9anY+2Kesa7uicTRd0bxhkA0xCxIIuRmDlfOyWSE4xqtiWkwKeVZsz+Ndu23cjrrtPtXSxx93VDEbZNaMTjbQ2uMJ53CW04jHG+QZhjXOtvyBP5L4/NM57i9xu5xuTxK54nr5ZKjRVXahoeTBG5rd2NwLvPCLKx2Z2xY4hszcF/WBu394buqxKE6JLJJH2vtKbx0p5j5NUNVWxqqWfZ8PhLnUz3MJ1OEAGMka2sQP3VJp69pydkfgky2J7ExWHbj7KP2/+pVerDtv9lH7f/UoQZOUVzdAhDdAhZKmqQhCocYIQhAAhCEACEIQAkk0kDBJNJIYkIQgYJJpIASEIQMiVFa1rgxodJIdI2C7up3NHM2C6/wDiSWmStkayMZmJrrN/5ZMi7oLDqojZ5IpXviLQX2Dg5uJrraEgEG4udCs1X7QlnkaHY5pT6EbRe3stGTRxcfMq0MfoePl1jnJwXZtV+5otodqmtb3VIwMYBYPLQAB+CP8AN3uKrqLbMcMJmqZCGvJLHOOJ0u4903Ui++wbmplB2Ra1vf7RkYGNz7oOtE3h3r/XPL0faWR+kh8M09NPF9k+BzGDCWgdzI4GzToLOFhbSyqsaexvCskZdUnv6diNtvtvUVF2UwMERyLr/tXDm4ej0b71nqeqbDbDGHvd6Lzc3uSPDxzuMt+9XfZvspV1jiREGw5gSSYmsBvk5jRnKRbT0eK+sdn+yNPSnGB3k2f7R4HhxOLnNhYPDEy7neFoGu9acow2RZys+c7A+jyqqyJq1zoY9cJA70jk05Rjrny3rdUslJQs7qjibfe7W54vec3n4Kb2rqiGtjBsHXLuYFrD4/BQNkU8BikkmBOA8SNRkAAdb3U22+Tz8+ok5+HDb3Zk+1DqqpmjFnyDCQwNbkCScQyyGQbmToN61vYbsu6lxyykGV4DcIzDG3va+8k25ZZLhsSMunbhFmg4iLkgDcL+4LXVVSyNpfI5rGt1c4gAeZTlN10orpMrnj3+XzMP9J9JiDD9+ORnuzH8xVbtzs7LtGkpqmnIMjIQDGTbEHAPBaTkHXcdbX45Zxe3XbWOodHDTNc7C42OEl0hIsAxmtutieC1vYOOWGCKKduB5Z6J9XxOLAeBwkZJtuCi+52xVpr6nyt3ZavbeM0c1yQcmEjK/rC7fW4rZdh+x09M41dTZhDHNZHcFxLxhu+2QFt2flbP6cVR7YrQSGD++v8Ae5GTUNxaDFDqkkV1RCHscw6OaWnoRY/NfPm7DphIWGGS7SQT+07u41zvpkvobnWBJ0GazMhu9z7nxWy3CxJy55/ALhbPXxQUnujIbU2OGyYWsuHejb4jy+ShOpsBILbEcRmt09l+udjwysstt2ZrpTb1QGk6Zi9/75ITFmwxj8SL/wCj7aLojKALtOAkfxDIrW1OzKequ5hwSb7DX2m7+oWK7IwOAe8ggOwgX32ve3LMLRA2zC1ZHotX3INZST03pi7dxGbD0O4q+7b/AGMft/8AUr3S7XNsMoxtOV7C/mDkVy7XStkhjwHF+03a+i7Ubk9jDUrVle3QIQELB0GqQhCocYIQhAAhCEACEIQAkk0kDBJNJIYkIQgYJJpIASEIQMhV9OW4X7n394NiPkshBWSQSCWF2F2HCTYEOF72cDqPjwW6pqphLoZfQJuD902+CwFQMgu7TV1JPhnz66Y6ltd20ctq7RmqZLzyF2HNrQLMbZt7tYMr65m552UfbgDqKB4H2VU+PjlNEHZ/vRrxPk4EcPl/9Xacl9DVt1LO4lA4YJcL7cPDIV35oJQ27Hon03sFU95QQH7rSz+BxYPgArXaVaImYrXJNmjiSsn9E1TipZGfclNujmtI+OJafbFAZWtwuwuabg5/MaHReNqOpKXTybxKPWuvgzVbLJI4F5BJ0YNwIByA0+a77O2HI/07sbe9t58t2/Vc9pV9Hs/xTSF8wzDGHxZ8R6oz1d5LH1G2dpbXcYqZmCG9nWJbEP8A2SWu8/hH8KxpcWSMW5vkzrsWDNki4rZfSzT7c7bUdE0xwASyDWx/Zg/if6x5C/ULMUuydp7XcJZnGKDVrnCwt/sxb/aOvErWdmfo+pqYiSb/APRON7h+zYfws083XPABa97hvzP3Rp/X+8l09aj5TCSSpFL2b7LUtGP2DMTyPFM/xPPGx3Dk2wVtLSxyXubnjv8A0sk+Qmxz6C1vMqDtSuELcRzPqgZC/kpSd8lIKTlUeTxVUsjBqS3kTl1G5QQFEPayfc2PzDvncLvTbXilNpAInH1h6B9oer1UW0+D0Y48sVcl9joqTasGF4IADSNw3jX8loZqdzdRkdCM2noVwc0HIgHrmk0bx5KdozK4GmjcQ8saTxIF+S18NPiOBoHiytbLzQ3sblbvgOAwX6Z4klFvgq9VjXn2/uUWzWYnhn3shbju8leO7Nyj1me936K12N2eZA7GXF7rWBtYC+thnmrSU5qkYbbnDn1fVP8AL4MFVUr43YXix+B6FcVttpUQlYWnXVp4H9FinsIJBFiNQsyVFcWTrXuJCELJU1KEIVDjBCEIAEIQgAQhCAEkmkgYJJpJDEhCTnW1QMarto7YhhIa9xxHOwFzbieC7S1f3fesJty/fyYtSQfKwso+Mm6id2k0niS+Pg2ez9twzZMfYnQHInoFYr5ZHfHGG64m25Ziy+ixzkcwsvN0upGtTpFjfwM5VQ8Z8vkFlnxEtNhewueVs1tgWv3fqvP1VgaWhoAIIyHEWXbjzpU0fOf8bJZ3Nva79z5xVDQ8/n/8UrYjMZmh/wBannjHXuy9vxYFz2hA5mJrhYt/I6jkrPsps6Tv4pbYWteDcjUHI2HCxOa9rNOKxttllFvZHD6Lu0ENOJu/kwNcxjhkTcsxAgAakh2nJd9s/SBU1T/q+zongne0XlI43GUY5/ELhsb6L53PcKmTuYGPcGhpa6SRoccJuLhoIsc7nkF9L2PsiClj7unjbEzefWdzcTmTzPuXmSlG77mWYfs99GguJdov7x5N+5aSW3/3HavPG1hzIX0KGFkbWsaGxsaLNY0BoA4C2Q8ven3nDf62t/16KprNqGN1pI3Yd0gAPvG7NRlO+TUISm6RaukNrAYbcNfcud9/vGXxK4UlZHIMUbr8QNfO+i7DPIC/TQLIOLTpjsBfhz0/r1VfW7NErge7ubWx3t5W0ViQB6WZ4DQL1FO4m1r8huQ1Y4zcXaM7UbGkBNqdjx+F4B92SopqR7cRMbmgXvcGw6nlxWg2/wBpKaJ5hiYaip/0oj6J4yv9GMdc+SpBsuafxVjwRqII7iJvDETnIeuSxKCXJ3YNTP0/z+5Fjmc30XEdCR8lY7NdUSOws8XEu0HUrr/4y9mtaOAtlb+i1OzKFsLAxvUnieKxGNl8+pjGPG4tn0fd5kgutnYWA6XU7GV5SCstjypPqds94yvKEIFQKh2zStL8xqL3+avlge2XbmnjOCAiaRtwSPsm9XD0jyHvCfQ57IrimoStnupgwZki3HRC+XbT2nLUOxTPLuA0a32W6BCutFtuyr1foj7qhCFyACEIQAIQhAAhCEAJJNJAwSTSSGcKqfDawJLjYAC50J0HRQi8vzJvy3Kwe03a5tsTHYhfQ5EEHqCVAlrfrFX3LY2x2HjeXWcTrlueOAIuc8xZSngnlunxv/PcpHKsfK+oiPIqv2pspstr3a4aOHyI3hW1ZSyRfaC7dzx6Pn908j8VHfIBlrfQWuT0AzK4WpRfud2PL/VFlLs/s+2N2Nz8R3ZWA8r6q4ZrhaC53Aa9TuA6qSyiNsUru7YN1xi83aN8rnmExV5YKdmFv3iMzzAO/m73FXjhlLef/pDLqnJ/Du/Xsc5Ye7wOkd4i6wa3QZE3O92nIZqY1wIuF4o9mFxvm5x1JPzJ+Suqaha3XM/AdAuqGOlSRyTy15nbK+LZxksS0W3Fwv7kqinczUee5XTngakDqVyfWRZhz2ebm/K6o6S3ZGOaTeyMzUdqn00p+swuNPlhqGXf3eXi75gzAvfxDcQtHBNHOwSxSNe0jwuacTT7t6rq6SnAJbKwa3F7jnosy3Y+E/WdnTdw9+dgL08vtx6brYhmM1qMotBLC3uvszbOFtRY8ePRZrbO0ZgSHHuuDWkGQ83EHw3/ALBXXZnbQBwhr4/q0pya8m9NIfwSeqeTtL6q3rdhRPd3oHiOZz8LuaU4utgwTjCXxoxVJVujdjacx7iN4I3hbzZNfHMy7bA+s2+YP5jmsxt6gZG0yHDHh1vZrT059NVSxSaOaeYIPxBCkm4HoTx49TG1szabc2rTUgBmkzd6EbRileeDGDM9dOaztRUVtZk4mjpz/lsI+syD/ckGUY5Nz3Eqvoy2OV02AOkf6T3XdIeQcbkDkrqHaLHanCef6qniLsc60TjvLceztnRQM7uFjWN4DfzcdSeZUpIFT9n0lyC7qB8rrG7ZuUlBbkrZtLhGI6n4BTUJOcBmVVKjglJydsaQUV0xvfcpaDIKl7Rdp6ajb+1dd5F2xtze7nbcOZsFy7Z9ohRQF4sZHnDG06E2zc78IGZ8hvXwyrqXyvdJI4ue83c46k/3u3Low4evd8CbNB2m7a1NXdl+6hP+W06j/cdq7pkOSzS8ucAuL5SV2JKKpGTq6QBCjIS6gP0YhCF5J2ghCEACEIQAIQhACSTSQMEk0khnGrqo4m45HtY3S7jbPgOJ5BVcPaGildgEzCXWHia9gNtPE9oG/K53qPtuaF1THFKy5A/ZnVt5CGkOG7NjbHPUqDXVlGW2L2uGlgxxv0xAfMLpWHZfC3foZ6vejYxVUkeX2jNC13pjo4+l0d71GdURhx+rw5nUlpY1vIk5/uty6KJsGsbJTtcPCGgssXAloZ4W4zxwhp81b09I9+Y8LfvEZn2W7+psOqg8bUq9BNwq3/srDTFzg6Vxc7cLfBjR+VzzVtR7OOrvCPujN3mdB8fJT6akazQZ73HU9Tw5DJdrrSikSnmb2WyM5I2rpSSMVRCSSSAO+YN/hGTx0seSs9m7UinbeN2Jt7HMhw5G+dxzsVYgqq2nsCOU94wmKX/UZa532e3R46qtxlzt/P5wR5O0my4XnEW4t2bnH5lNuyYBpE3zF/mqk7UmpyRVts3QTsB7s8C8asOeh8OuavqecPFxaxFwQb3/AL81OWFLdpfM34k6q39zw2iiGkbP4W/ouroWuGEtFhpy6cF6e4AXJWU2z2zaHdzStM0p3NzaOZPDztzTjC+EZuTZL23QxAYJcDmPOHC+2ZtcDPInIqgp6CrpMqCdpiP+RUYnxs5xOHiaPw6Kp2nhY4S7Snxyasp4zfnutlpwbxJVts7bkz2GWWkkjivk8HHYfec0AOw/iAI+abj0+Tf/AB9DqVNVk5PcOxS9/fVkrqiXdfwwx8ooxkOpuclLqKIHn8/JSoZmvaHMcHNOhBBB6EL0oSbfJ0QSj5TPzUhGmfzUdaZ7AdQok+z2uWGjqhn/AFFNHK5vokjotzTyXDXN0IBHmsjLsx40sfmpeyaySI4HMcWndbMdL7k4OuSWqx+LFOPKNeJxa/wVbU1viyz4/oFxqawWyyG8lVE9bub7/wBFuUvQ48WDvI0gKmQOuFn9h1NwWE5jMdDr8fmrmKUNDi7QAk+WZ+C2nZzzj0So+P8A0m7SMtc9l/DCBG0br2xPPW5t+6FknHgLngu9bUmWR8p1ke55/ecXfmoUxzHJeol0xokzw+++465LzdWFNtV7cn+NvPX37/NSjSwzC8Zwu4fq38wkcU9VLE/zY0vVbr690RtqUdiHsF2uzsNxOfuKFbbODgwNcLFuXUbiOVvkkijzY/icsP5bXVXe+V2PsyEIXkn1gIQhAAhCEACEIQAkk0kDBJNJIZmdqVUMVc2Sojc9ghGENtfFiNjmRoL794WP2y+Nz3mJpbGXeBp1A3A5n5r6dWUUcowyMDhuvqOhGY8lVjsrS3v3ZPIucR7ibL0MWrhCNNO6r2IyxNuyk7JUTZoJYZMWFxbm02ILcxY+7kp4qdoUIsx31iAcWlz2jgWjO3NtxyC0MFM1noiw6AfJdVCWobm3Wz7M34Sao57A7XwVIAJDXn1SdfZPrfPktCOWaw22OzUMxL2/spD67Rk4/jbo7rkeahUu36uhIbUt7yK9hIDccvEdDyd5FNRhPybP0f8A0yE8TifRgmCq/ZW2YahuKN4vvGhHUbv71XTaW1IYGF8rw0Dj8hxPRY6XdVuTJj2gghwBB1BzHmsH2lrY6F7DSOAc59n097sN9CxvqOJsLAi9+SKnbtXW5Ure5hP+c/Uj/bbv6j3hdtl7Chg8di+TO8j8387fd8vitqSx87+37lYYnIgVIq6vOpeYIjpEzOV/I62+PQK82PshrI7RRYGkX34nWyOMnPH7SmbDNNM3HHJjJydcm4N7jI5sIN7aH4K+AWJtvZ/YfiKPlR8tHZp9HUGoji+tt1dHKT34P3mnSQ9RfgN6Y2waxsklRUx08LCQaZrnNkO60riLnoPmvpk8DXjxDz3jzWY7R9lIpvG8eIWwyts2VttL/eA4G/KyTk2qf3CDi3a+zM5syimleH0Uf1eLe+TEGS5ZWh1O7x5HmrDZm3mSSvp3YRLH6WA95EdM2vGmtrGxvkuVXsytntFU1oMDRa0Te7klH+6bWb0GIH4q02fQRQsEcTGsaNw3ni4nNx5kkrMulKuS+PxG7eyJKSa8SyhouSonQelHnqg3IZn+9VFnqychkPioyDSR7llLtT+i8KFtDaccI8Ru7c0a/wBPNZbaO15JcicLfuj8zvVceCU/kTnljD5mx2Ptphqo4meIuLgSPRHhJ136K67b1ndUM7gc3NwD/kIYfgSfJfMtgbUip6qKSUkMaSSQCbXa4aDM5ncr36Qu0sFRDFHTyh4Ly51g4Wwts0EOAOeI/wAK6VhUZpI4ck3J2zBqNKcypKiOOa7JERtYToCeguujYpGm4a8Eb7OCdK6S9o8V+V/ju96u6V9R67WnzsfhcJHDqtTLF+l+zdM4UW1xa0mRG8DXqNxQrCSnY70mA9QLoTPDlPSSduLXsmqPsKEIXkH24IQhAAhCEACEIQAkk0kDBJNCBnlCaSQwSTSQAl5e0EEEAg5EHMHqF6QgZma3sxhd3tG/unj1LnAfZIzZ0zHJSKTs8C7vap5nl5/Zt9lu/wA/cFeoVHmm1VmfDjd0eSFWmGZjrtdiGWWoPUHMHmD5KzQpUWhNxK2o2a15ErcUM1vTYfF0eNHjqpNN2ilg8NW27N07ASz/AJG6sPvCkJEKkcjWz3RGeOMiXtHtNBE1pDu8c8XYxnjc7oBu56Kke+qncHzPMLAQREw3cbZjvH/9QpFNs+KIkxxtaXakAC/Lpy0XdN5F/SZhgS3Ykimq3aEhxYb5cFI6VudaiuAybnz3f1UB7iTcm5SQsm0jzJIGi5Ngs5tXbr82xtLR94jM9OH96J1UznOOI3sSuK3CSi7aszOLapOikc4k3JuTv3oVtJA06tHy+SqnjMr0cWZZODhyYnDk8OaDkRdQpmAGwFlPUKQZnqVZEWcXHJRFLmGRURDMMnQ7Ue0Wa1gHQ/quzdtv3sb8QqtCLOWWiwSduJdM22N7D5G6FTBCLIv8M036f7s//9k=',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    github: 'https://github.com/shikhar125',
    liveDemo: 'https://shikhar125.github.io/Student-Registration-System/',
    features: [
      'Student enrollment with form validation',
      'Course selection and assignment',
      'Admin panel for managing student records',
      'Automated email confirmations and updates',
      'Real-time registration status tracking',
    ]
  },
  // {
  //   id: 4,
  //   title: 'Fitness Tracking Website',
  //   description: 'A fitness tracker that allows users to monitor workouts, nutrition, and progress towards health goals.',
  //   fullDescription: 'A comprehensive fitness tracking platform that enables users to monitor their workouts, nutrition intake, and overall progress towards their health and fitness goals. The application provides personalized recommendations and analytics.',
  //   image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['React', 'Chart.js', 'Health API', 'Tailwind CSS'],
  //   category: 'web',
  //   github: 'https://github.com',
  //   liveDemo: 'https://example.com',
  //   features: [
  //     'Workout tracking and exercise library',
  //     'Nutrition logging and calorie tracking',
  //     'Progress visualization with charts and graphs',
  //     'Goal setting and achievement tracking',
  //     'Personalized workout and nutrition recommendations'
  //   ]
  // },
  // {

 
];

// Filter categories
const categories = [
  { id: 'all', name: 'All Projects' },
  // { id: 'web', name: 'Web Apps' },
  // { id: 'mobile', name: 'Mobile Apps' },
  // { id: 'ui', name: 'UI/UX Designs' }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section bg-dark-50 dark:bg-dark-900">
      <SectionTitle 
        title="My Projects" 
        subtitle="A selection of my recent work, personal projects, and client websites."
      />
      
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-dark-700'
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <motion.p 
          className="text-center text-dark-500 dark:text-dark-400 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No projects found in this category. More coming soon!
        </motion.p>
      )}
    </section>
  );
};

export default Projects;