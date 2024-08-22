<!-- Modal -->
<div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit sticky paper</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="updateTask">
                <input type="hidden" id="taskId" name="taskId">
                <div class="modal-body">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="updateTitle" name="updateTitle" required autocomplete="off">
                    <label for="content">Content</label>
                    <textarea name="updateContent" id="updateContent" class="form-control"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </form>
        </div>
    </div>
</div>
