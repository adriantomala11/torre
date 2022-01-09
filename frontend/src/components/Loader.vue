<template>
    <div class="modal fade" id="loadMe" tabindex="-1" role="dialog" aria-labelledby="loadMeLabel">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <div class="loader2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.loader2 {
      position: relative;
      text-align: center;
      margin: 15px auto 35px auto;
      z-index: 9999;
      display: block;
      width: 50px;
      height: 50px;
      border: 7px solid #e7ebc386;
      border-radius: 50%;
      border-top-color: #cddc39;
      animation: spin 1s ease-in-out infinite;
      -webkit-animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }

    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }


    /** MODAL STYLING **/

    .modal-content {
      background-color: transparent;
      border: none;
    }

    .modal-backdrop.show {
      opacity: 0.75;
    }

    .modal-dialog{
        margin-top: 35vh;
    }

    #loadMe{
        opacity: 1;
        display: block;
    }
</style>