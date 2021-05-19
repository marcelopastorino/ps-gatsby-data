@import '../styles/global';

.repository {
    padding: 10px;
    margin-bottom: 30px;
    border-bottom: 1px dotted $color-pallete-6;

    &:last-child {
        border-bottom:none;
    }

    .name {
        text-decoration-line: none;
        color: $color-pallete-3;
        font-size: 20px;
        padding-bottom: 5px;
        font-weight: bold;

        .stars {
            color: $color-pallete-2;
            font-size: 14px;
            font-weight: 100;
        }
    }

    .description {
        color: $color-pallete-6;
        font-size: 18px;
        padding-bottom: 10px;
        line-height: 28px;
    }
}