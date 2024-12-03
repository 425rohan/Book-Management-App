const Books = [
    {
        image: 'https://m.media-amazon.com/images/I/81q77Q39nEL._SY522_.jpg',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        desc: 'The first book in the Harry Potter series introduces Harry Potter and his journey into the wizarding world.',
        link: 'https://www.amazon.in/Harry-Potter-Philosophers-Stone-Rowling/dp/1408855658/ref=sr_1_1?sr=8-1'
    },
    {
        image: 'https://m.media-amazon.com/images/I/81gepf1eMqL._SY522_.jpg',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        desc: 'A classic novel that explores themes of racial injustice and moral growth in the American South.',
        link: 'https://www.amazon.in/Kill-Mockingbird-Harper-Lee/dp/0099549484/ref=sr_1_1?crid=1TGZO5FSW6S5H&dib=eyJ2IjoiMSJ9.r9zfs01fIurXrH06faLvJ-BfjYCrYikbZZ3mP_DoBsVh3SlK_8V1ZP3hvxWlKyEzAXz9af1Xj9QM4IqiGlCBcVQZc4Cu46j9MZvsffhkYFG57cocujaFDChygAB8i1Q-DEavqySGNPGjPJhukWA3XsLV9IpNXLy-mIBRDe2no9dCapEGfxsECv-wvy5_gn27f4Sz4XsNfAlrGBMCRCYY5uTvxSTudrNG-2L11e0us74.vf2M9UbXiPY2KTJkUcOd0uthkquNTAXnRMubv-_Kx_E&dib_tag=se&keywords=to+kill+a+mockingbird&qid=1733211076&sprefix=to+kill+a+%2Caps%2C218&sr=8-1'
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg',
        title: '1984',
        author: 'George Orwell',
        desc: 'A dystopian novel about a totalitarian regime that uses surveillance and propaganda to control its citizens.',
        link: 'https://www.amazon.in/1984-Deluxe-Hardbound-George-Orwell/dp/8194898870/ref=sr_1_1_sspa?crid=1HXLCZHSBZ97G&dib=eyJ2IjoiMSJ9.c-F3zKRrrriZlJdCRgjGeYO4hKlcQLba2S08tIDLYeKdJHpigvDDrD8NgpJANXZa0-WNXUJtwMoyAQcNqJxMzvhvlsK_PeBa9ho1F8tgeFBuqhNAvkAW9F8ChG7l4G8M4yAd4joJO5x4l7LaB_2VjMRDgd8qIK5r1nus0jzMn4XfG5T5H1u8gPT2R1LGT3BD8S4EgRWAKnr_DbxmCl9bvhukSqymI8qmdbmqQycKW4U.dQji9iXfC5ePjNSdAdP4jwupI_36nDnEqKImQNZfpKE&dib_tag=se&keywords=1984&qid=1733211110&sprefix=1984%2Caps%2C214&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        desc: 'A romantic novel that critiques social class and the expectations placed on women in the 19th century.',
        link: 'https://www.amazon.in/Harry-Potter-Philosophers-Stone-Rowling/dp/1408855658/ref=sr_1_1?sr=8-1'
    },
    {
        image: 'https://m.media-amazon.com/images/I/817+192hZyS._SY522_.jpg',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        desc: 'A novel that explores themes of decadence, idealism, and the American Dream during the Jazz Age.',
        link: 'https://www.amazon.in/Great-Gatsby-DELUXE-HARDBOUND/dp/9390183529/ref=sr_1_1_sspa?crid=32P6DXQY34XJ8&dib=eyJ2IjoiMSJ9.UEBq6F46tAqnMd5VtA9-p-EUKtsr21MOf5st7GiIckpKzBH7QH1GIiYoAMOXlbfzvSJXLo0GG18XkC8Z7lmTPlQ24hYpsOEqFfNGnxq4DcH6Hb2CGT7pGkZ0h1_WKs2dFrUw3j0GDzhDxxTRXoDCYxfoIWUhUwdf3RKJcA4ALPOzkNfZO5ZKv_1qyTXLAcLuV4FhOazmH5MDNtfirGM51w9-rqW1J1XYU3D5vkMp7Nc.tMHMcZ-hhU6_GlVK0vGRsnZsVKk7hszDe-nfX4zSpTM&dib_tag=se&keywords=great+gatsby&qid=1733211160&sprefix=great+gatsby%2Caps%2C227&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        desc: 'A coming-of-age novel that follows Holden Caulfield\'s experiences in New York City.',
        link: 'https://www.amazon.in/Catcher-Rye-J-D-Salinger/dp/0241950422/ref=sr_1_1_sspa?crid=1S1K4DUC5B418&dib=eyJ2IjoiMSJ9.8sEBP_2iaNVMrn57-3STpSjrhJULs0BIrQokE-noCETJEp09HaeyyeHU3m7rzIFyOB_rMTuodzxXduRiHrt8qi-zn2njg2UHWDos7wu5LdHNnLF4TbUV0vIUSo8c32YVEDxKMmN1eTDXZSajq1AEpKCpVm27w1RBQnLjqqn0ux-lQBk4HuNrOIaPKoUvvuSQaOAAta_PcpdSSayI49awiPp_qoJI45_hKIRtz9Mt6jk.CY-rfY9dSZyC2fmU9T1SZVdG5-OtLMkG0YN9QMYU94o&dib_tag=se&keywords=the+catcher+in+the+rye&qid=1733211189&sprefix=the+catcher+in+the+ry%2Caps%2C214&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&smid=A15DBATYR506U3'
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        desc: 'A fantasy novel that follows Bilbo Baggins on an unexpected adventure with a group of dwarves.',
        link: 'https://www.amazon.in/Hobbit-Film-tie-J-R-R-Tolkien/dp/0008118043/ref=sr_1_3?crid=1XXLP9AR93B6K&dib=eyJ2IjoiMSJ9.ZuBsBCrmqmqPKHMas42Olgj1aM6pivoK07twWOlCNuVqIXau3I4d-ao-Ive5e2bmEYKBKR0BIZv458mDNvfFVHJ9hhE3XgF4Lw5FTv2x9KRDVjMDQIntYedyrTJpjm29oYwthnyILzqwnNnNoUpKujJEW0qb8rIFDYT4HkyT7JDSJkbh56-vdnxqqlVWMZOCvo9FJ9FFmc8p8EuDBYZ1FuWYWJkBqMX9n65_mVAuEPM.I69L8Wxt4QhFmDmG7cU7MNnYzbuIggy76WEuPYqjH_M&dib_tag=se&keywords=the+hobbit&qid=1733211213&sprefix=the+hobbi%2Caps%2C220&sr=8-3'
    },
    {
        image: 'https://m.media-amazon.com/images/I/41tQd4+4F0L._SY445_SX342_.jpg',
        title: 'Moby-Dick',
        author: 'Herman Melville',
        desc: 'An epic tale of Captain Ahab\'s obsessive quest to hunt the titular white whale.',
        link: 'https://www.amazon.in/Moby-Dick-Herman-Melville/dp/9350334976/ref=sr_1_2_sspa?crid=3AJVCBRFKNL7D&dib=eyJ2IjoiMSJ9.TNg8MAThjjb_9SGJQEqoOM4uqbOM1X0t0ipkCgZE-jO4E6HwJZSQehWeaWkHthEGC5KnKSeRFxbXeuuwxqJA4Kqkh52oG1VZ3ndYyFS8hTa45T10q32r6WXkqu3JaegdCL7GtyUyfp-8skalBVrh1XhPSwBYXJd341StcV2VogBhTDA799JkQhQiDQMuA-4p3uaYIQdBDNAM8-qc8FKGv3XOZJ45dKXBwEsoL0Ufifk.Qdn1ZSKuQOm2VJtIEVraChiv7cC4YB2SJksqfsjJCTk&dib_tag=se&keywords=moby+dick&qid=1733211235&sprefix=moby%2Caps%2C298&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        desc: 'A philosophical book about following one\'s dreams and the journey to self-discovery.',
        link: 'https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988/ref=sr_1_1_sspa?crid=2ALDMUSHSJE74&dib=eyJ2IjoiMSJ9.M9zZ1Mvn2RCpw735fm0vcB1JGT8cSrK8OVLTnwyWBGvoeXPeF0lMsHYRIfH6cWojt-3lncW6kD7LhZBdsZY7nIRptv-DYBGx6-xhq8Fe441_Yjn6KyYcYC-rTjmIvN0DRXwnOP7OSSfuilx2EJ9hllAhh0OqbxUiyLCcjEFqIvTzIKoY23gPQaOoZu8j1IKKHhX2B4NVwRSaQuvkj8XgS5T_Oz7q41qC7ZmvCk_Mj18.bufIljm6YwMj4pPvf27VgKm27t-EOCX5ujjwwT-H75g&dib_tag=se&keywords=alchemist&qid=1733211259&sprefix=alchemist%2Caps%2C218&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    },
    {
        image: 'https://m.media-amazon.com/images/I/51zHnXCq1mL._SY445_SX342_QL70_FMwebp_.jpg',
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        desc: 'A novella that explores themes of love, loss, and the essence of human connections.',
        link: 'https://www.amazon.in/little-prince-Antoine-Saint-Exupery/dp/9385609920/ref=sr_1_3?crid=24W0AG941NBI7&dib=eyJ2IjoiMSJ9.SjgjHbuX69UiIAK1RlGEYWPPLWQ94R-4pX_PBvZ6WkRJoglNcN6xAcDG6ple381WqnxWDhc1xMjSpmnJvnT1BqB2wZ_wR18TqDkdsMYJwrW5sXI9WL7UWD_U18rBaV4u06P_w0x8EKtlnrk9QnoloXVSVlDNVZab37PVv9JYP6hR5yqrH1axQZDYRiEohl3ufNlootHwsdNXAshPcQMjNksp_PZepV433-hKfCdgWCg.fOjFAPevWHYvKMm9gXhmFD1jJfgR6Pa3bSDaNlAqeFU&dib_tag=se&keywords=little+prince&qid=1733211289&sprefix=little+prince%2Caps%2C229&sr=8-3'
    },
    {
        image: 'https://m.media-amazon.com/images/I/81CNuKIIicL._SY522_.jpg',
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        desc: 'A novel that delves into themes of vanity, moral corruption, and the pursuit of pleasure.',
        link: 'https://www.amazon.in/Picture-Dorian-Gray-Oscar-Wilde/dp/8171675921/ref=sr_1_1_sspa?crid=Y371NEM30F2P&dib=eyJ2IjoiMSJ9.RRAUt2-lCcMZXzumf2qlNZj5coGZWVSkUQzTKw4ORbJsr8-zE7J2A0dlRE7_HM_vqkbknzmbsMobcJWMt0Hzmmj_h_RoUCZYfMelHVgFxX7JVfxGADKQxo1JbSehugnoAh9bMj_aqKFABMMP4Y1CrzL6B-pca-ri8-bTdDIGD9EuOM4EE1_Wf-yzqZ7lJx2iodajwDEx0XJ9lDzXzm2kOntVwud58hhrFIX3_2hMgyk.oF3ADoKlColadaX5DC-KhqPFjj_hxhs6MRZsKQuFHyY&dib_tag=se&keywords=the+picture+of+dorian+gray&qid=1733211318&sprefix=pictuue+of+dorian+%2Caps%2C273&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    },
    {
        image: 'https://m.media-amazon.com/images/I/51APkyJzNlL._SY445_SX342_.jpg',
        title: 'The Book Thief',
        author: 'Markus Zusak',
        desc: 'A historical novel set in Nazi Germany, narrated by Death, about a young girl\'s relationship with books and her life during World War II.',
        link: 'https://www.amazon.in/Book-Thief-Definitions-Young-Adult/dp/1909531618/ref=sr_1_1?crid=3PKWBU1VLRPO2&dib=eyJ2IjoiMSJ9.C9ceo80vJ38fyeQ30tQ5ThNomTRnWD4V-rQso61en2WM346xEP55I99TT0a6UxkqChgi_xzGOU4B23dLby6wo6z9rk7sb3EM88bTpxwRswF0bti_EGX3YcwmjS018mZz0KwjuMAeN1Ba8m9lkfINeDEaT15bYPkyqJe-bkq6MHKD0RW5n0ggoaXeNpIPmgblJCIQ9mkiLpYz11nCBEcxQDXzzCH6WG_9IRuLM9Uq9Ro.MUuSACpj0FSuUaf0BDe_uLCsk-P1dD397UBw-ib3bVw&dib_tag=se&keywords=the+book+thief&qid=1733211344&sprefix=the+book+thief%2Caps%2C217&sr=8-1'
    }
];


export default Books;
