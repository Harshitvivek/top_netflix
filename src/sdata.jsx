const sdata= [
    {
        sname: "Dark",
        imgsrc: "https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbetdjjuRqow-y1xvgeBLmzwbRnwkmAZW4PApMgT6h5tYSa2ZpTkpwm9JJ3ZCvQ2FDUTeriOnWB2422V094CEg_hc8C7gU2vNK4fAdsbWhXTlJnwlDiXy9hw5i3dbrEo0-Nc.jpg?r=393",
        title: "Netflix Original Series",
        links: "https://www.netflix.com/search?q=dark&jbv=80100172",
    },
    {
        sname: "Breaking Bad",
        imgsrc: "https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ2eejwOmFWqyOd0caBviCBDM1tWDBRunzwQDiD-3eeBNp7Wy-dCxxPsm5zxpuSRyh5E0gZAejeJp20KYnrJZefTBkyGu9etx2k.webp?r=01d",
        title: "Netflix Original Series",
        links: "https://www.netflix.com/search?q=breaking%20&jbv=70143836",
    },
    {
        sname: "Peaky Blinders",
        imgsrc: "https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUQOjeQy2eZ_MnQRzcrt_WyKEB8G8MU6H1AfxPHPyiiX-c_Hzs8RhHjoRSjVfSKCAofkT6s3RlGQ7XwVhnfTu1l-saLH5zzVItoOk3fM48XpKQt6lBd14vJm8qQvvW8Ro5R9.jpg?r=a07",
        title: "Netflix Original Series",
        links: "https://www.netflix.com/search?q=breaking%20&jbv=80002479",
    },
    {
        sname: "Lucifer",
        imgsrc: "https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQc9mGMmWNlLkhWh5Si5F-XFG_SHfCRQhpf39-Ukp_AkQKMM2ZeM9xXVWiySYsEKDeGd4EhqLeWsEa-BPCn60exgBfhOw284HTrowmh0Bp0jn-uIQlu9jEJ4eODkWIzit1Xz.jpg?r=31e",
        title: "Netflix Original Series",
        links: "https://www.netflix.com/search?q=breaking%20&jbv=80057918",
    },
    {
        sname: "Stranger Things",
        imgsrc: "https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUBqk1kVoBJpFzZRwtLTds-wGSZTGqHoy__0aj7Eq740Lw50abtIYmYBYlBy8MqKrmcOBu6ytfhC9wrgyL9DZChpWRTzGeLfgHTGIMk-w-Zj6bP4egyO7f_oN1tz1icM_XCtSIZgjO_GOgsN1E8fkK38gK79Wp-x7Vo8ez_a70IipB-QF4aeotcm-f7xJMI.jpg?r=42a",
        title: "Netflix Original Series",
        links: "https://www.netflix.com/search?q=breaking%20&jbv=70143836",
    },
    {
        sname: "Money Hiest",
        imgsrc: "https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTme4YrKP_BkbNBgDiB1tT0CrCXPwVdZ1j1HD7J7N17nnfvcPimb_a4UtgcelzlXrE5TolZkKABI1GAkwrb3vU5Jr-HEI8erLeWx6SQoXgm5lBhQZW6mDzkhJa84oxwujhVK.jpg?r=8a4",
        title: "Netflix Original Series",
        links: "https://www.netflix.com/search?q=money&jbv=80192098",
    },
    {
        sname: "Narcos",
        imgsrc: "https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbf6huSVfoLad4ztECO7t-c5DTbdallugBfhjjZStom8SoedQkyJtVFotkWX4tF6yD8T6VeLPp7o-XaaPK5kDwJ9es2Vh9M7qRvXyxWkayhXzfq09dXvwttV8e9pQa-hJVG8.jpg?r=9b3",
        title: "Netflix Original Series",
        links: "https://www.netflix.com/browse?jbv=80025172",
    },
    {
        sname: "Squid Game",
        imgsrc: "https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe1K0jvXMRWrtduB7dyvz3z3k8HN-5pWEB4VgSodCnItRKQahxxWcwprEVfbKCzTelyimoH7Z0uDHFDEt4YikrHaRmtio6UHlbfu4f-FN7CGFjreivtIb7ZY0SnxQIS4g_3U.jpg?r=5e6",
        title: "Netflix Original Series",
        links: "https://www.netflix.com/search?q=squid%20game&jbv=81040344",
    },
    {
        sname: "Kota Factory",
        imgsrc: "https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVWhOFOqe3HKU_3xaS7IuSXAQe3sDbC8kPgyslDL_73q3JaUEdrMDsRtMF7HQIBkLr6yIp8EkQDjF2A39clrUu46Cg1NMjnRtMhBWILLKHrqP5HYFx7r45ZMhS3gNp0tYAA1.jpg?r=4d9",
        title: "Netflix Original Series",
        links: "https://www.netflix.com/browse?jbv=81249783",
    },
]

export default sdata;