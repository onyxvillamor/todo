 <!-- Modal -->
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog">
         <div class="modal-content">
             <div class="modal-header">
                 <h1 class="modal-title fs-5" id="exampleModalLabel">What to do for today?</h1>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <form id="addTask">
                 <div class="modal-body">
                    <label for="title">Title</label>
                     <input type="text" class="form-control" id="title" name="title" required autocomplete="off">
                     <label for="content">Content</label>
                     <textarea name="content" id="content" class="form-control"></textarea>
                 </div>
                 <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     <input type="submit" class="btn btn-primary" value="Save"  data-bs-dismiss="modal">
                 </div>
             </form>
         </div>
     </div>
 </div>