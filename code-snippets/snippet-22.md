@import '../styles/global';

.presentation {
    padding: 10px;
    margin-bottom: 30px;
    border-bottom: 1px dotted $color-pallete-6;

    &:last-child {
        border-bottom:none;
    }

    .title {
        text-decoration-line: none;
        color: $color-pallete-3;
        font-size: 20px;
        padding-bottom: 20px;
        font-weight: bold;
    }

    .description {
        color: $color-pallete-6;
        font-size: 18px;
        padding-top: 10px;
        padding-bottom: 10px;
        line-height: 28px;
    }

    .conference-name {
        color: $color-pallete-9;
        font-size: 15px;
    }

    .conference-location {
        color: $color-pallete-9;
        font-size: 14px;
    }
}