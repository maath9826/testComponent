<script>
    export let ImgURL = ''
    ;

</script>

<style>
    .card{
    /* width: 300px; */
    box-shadow: 0px 0px 20px 1px rgb(1 1 1 / 10%);
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
    }
    img{
        width: 100%;
    object-fit: cover;
    height: 180px;
    }
    .content{
        color: rgb(73, 80, 87);
        margin: 14px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    }
    .content *{
        margin: 0;
    }
    .header{
        display: flex;
    flex-direction: column;
    gap: 5px;
    }
    .header span{
        font-size: 14px;
    }
    .body{
        color: black;
    }
</style>

<!-- .card{
    width: 300px;
    box-shadow: 0px 0px 20px 1px rgb(1 1 1 / 10%);
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
    } -->
<div class="card">
    <img src="{ImgURL}" alt="card img">
    <section class="content">
        <section class="header">
            <h2>Header</h2>
            <span>Subheader</span>
        </section>
        <section class="body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </section>
        <section class="footer">
            <button>true</button>
        </section>
    </section>
</div>