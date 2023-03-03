<template>
  <h2>購物車</h2>
  <template v-if="carts.carts">
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th>單價</th>
          <th>小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in carts.carts" :key="item.product.id">
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="delCartItem(item.id)"
            >
              <i class="fas fa-spinner fa-pulse" v-show="item.id === loadingId"></i>
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <!-- <div class="text-success">
                                            已套用優惠券
                                        </div> -->
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <!-- <input min="1" type="number" class="form-control"> -->
                <select
                  class="form-select"
                  @change="updateCartItem(item)"
                  v-model="item.qty"
                  :disabled="updataloadingId === item.product.id"
                >
                  <option v-for="i in 10" :key="i+1" :value="i">{{ i }}</option>
                </select>
                <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
              </div>
            </div>
          </td>
          <td>
            <!-- <small class="text-success">折扣價：</small> -->
            {{ item.product.price }}
          </td>
          <td>
            {{ item.total }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" class="text-end">總計：</td>
          <td class="text-start">{{ carts.total }}</td>
        </tr>
        <tr>
          <!-- <td colspan="3" class="text-end text-success">折扣價</td>
                                <td class="text-end text-success">{{ }}</td> -->
        </tr>
      </tfoot>
    </table>
  </template>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
    data(){
        return{
            carts:[],
            loadingId:'',
            updataloadingId:'',
        }
    },
    methods:{
        getCartList(){
            this.$http.get(`${VITE_URL}api/${VITE_PATH}/cart`)
            .then((res) => {
                console.log(res);
                //console.log(res.data.data.carts);
                this.carts=res.data.data;
                //console.log('購物車',this.carts);
            })
            .catch((err) => {
                console.log(err);
            })
        },
         delCartItem(cartId){
            this.loadingId=cartId;
            
            this.$http.delete(`${VITE_URL}api/${VITE_PATH}/cart/${cartId}`)
            .then((res) => {
                console.log(res);
                this.loadingId='';
                this.getCartList();
            })
            .catch((err) => {
                console.log(err);
            })
        },
        updateCartItem(item){
           
           this.updataloadingId=item.product.id;
            const data = {
                product_id:item.product.id,
                qty:item.qty
            }
            //console.log('購物車id',item.id);
            //console.log('產品id',item.product.id)
           
           this.$http.put(`${VITE_URL}api/${VITE_PATH}/cart/${item.id}`,{data})
            .then((res) => {
                console.log(res);
                this.updataloadingId='';
                this.getCartList();
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },
    mounted(){
        this.getCartList();
    }
}
</script>
